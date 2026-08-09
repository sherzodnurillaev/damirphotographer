import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, text, rating } = body;

    if (!name || !text || !rating) {
      return NextResponse.json(
        {
          error: "Заполните все поля",
        },
        {
          status: 400,
        }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        {
          error: "Оценка должна быть от 1 до 5",
        },
        {
          status: 400,
        }
      );
    }

    // Создаем временную заявку
    const { data, error } = await supabaseAdmin
      .from("review_requests")
      .insert({
        name,
        text,
        rating,
      })
      .select()
      .single();

    if (error || !data) {
  console.error("REVIEW REQUEST ERROR:", error);

  return NextResponse.json(
    {
      error: error?.message || "Не удалось сохранить отзыв",
      code: error?.code,
      details: error?.details,
      hint: error?.hint,
    },
    {
      status: 500,
    }
  );
}

    const stars = "⭐".repeat(rating);

    const telegramMessage = `
📝 <b>Новый отзыв</b>

👤 <b>Имя:</b> ${escapeHtml(name)}

${stars}

💬 <b>Отзыв:</b>
${escapeHtml(text)}

📅 <b>Дата:</b> ${new Date().toLocaleString("ru-RU")}
`;

    const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    const telegramResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "✅ Одобрить",
                callback_data: `approve:${data.id}`,
              },
              {
                text: "❌ Отклонить",
                callback_data: `reject:${data.id}`,
              },
            ],
          ],
        },
      }),
    });

    if (!telegramResponse.ok) {
      const telegramError = await telegramResponse.text();

      console.error("Telegram error:", telegramError);

      // Если Telegram не отправил сообщение,
      // удаляем временную заявку
      await supabaseAdmin
        .from("review_requests")
        .delete()
        .eq("id", data.id);

      return NextResponse.json(
        {
          error: "Не удалось отправить отзыв в Telegram",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Отзыв отправлен на модерацию",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Ошибка сервера",
      },
      {
        status: 500,
      }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}