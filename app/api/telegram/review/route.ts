import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const secret = request.headers.get(
      "x-telegram-bot-api-secret-token"
    );

    if (secret !== process.env.TELEGRAM_WEBHOOK_SECRET) {
      return NextResponse.json(
        {
          error: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const update = await request.json();

    console.log(
        "🔥 TELEGRAM CALLBACK:",
        JSON.stringify(update, null, 2)
    );

    if (!update.callback_query) {
      return NextResponse.json({
        ok: true,
      });
    }

    const callbackQuery = update.callback_query;

    const callbackData = callbackQuery.data;

    if (!callbackData) {
      return NextResponse.json({
        ok: true,
      });
    }

    const [action, id] = callbackData.split(":");

    if (!id) {
      return NextResponse.json({
        ok: true,
      });
    }

    // =========================
    // ОДОБРЕНИЕ
    // =========================

    if (action === "approve") {
      const { data: request, error } = await supabaseAdmin
        .from("review_requests")
        .select("*")
        .eq("id", id)
        .single();

      if (error || !request) {
        await answerCallback(
          callbackQuery.id,
          "Отзыв уже обработан"
        );

        return NextResponse.json({
          ok: true,
        });
      }

      // Переносим в публичные отзывы
      const { error: insertError } = await supabaseAdmin
        .from("reviews")
        .insert({
          name: request.name,
          text: request.text,
          rating: request.rating,
        });

      if (insertError) {
        console.error(insertError);

        await answerCallback(
          callbackQuery.id,
          "Ошибка при публикации отзыва"
        );

        return NextResponse.json({
          ok: true,
        });
      }

      // Удаляем заявку после публикации
      await supabaseAdmin
        .from("review_requests")
        .delete()
        .eq("id", id);

      await answerCallback(
        callbackQuery.id,
        "✅ Отзыв опубликован"
      );

      await editTelegramMessage(
        callbackQuery.message.chat.id,
        callbackQuery.message.message_id,
        "✅ <b>Отзыв одобрен и опубликован</b>"
      );

      return NextResponse.json({
        ok: true,
      });
    }

    // =========================
    // ОТКЛОНЕНИЕ
    // =========================

    if (action === "reject") {
      const { error } = await supabaseAdmin
        .from("review_requests")
        .delete()
        .eq("id", id);

      if (error) {
        console.error(error);

        await answerCallback(
          callbackQuery.id,
          "Ошибка при отклонении"
        );

        return NextResponse.json({
          ok: true,
        });
      }

      await answerCallback(
        callbackQuery.id,
        "❌ Отзыв отклонен"
      );

      await editTelegramMessage(
        callbackQuery.message.chat.id,
        callbackQuery.message.message_id,
        "❌ <b>Отзыв отклонен</b>"
      );

      return NextResponse.json({
        ok: true,
      });
    }

    return NextResponse.json({
      ok: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Server error",
      },
      {
        status: 500,
      }
    );
  }
}

async function answerCallback(
  callbackQueryId: string,
  text: string
) {
  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/answerCallbackQuery`;

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      callback_query_id: callbackQueryId,
      text,
    }),
  });
}

async function editTelegramMessage(
  chatId: number,
  messageId: number,
  text: string
) {
  const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/editMessageText`;

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      message_id: messageId,
      text,
      parse_mode: "HTML",
    }),
  });
}