import ReviewForm from "@/components/reviews/ReviewForm";
import Reviews from "@/components/reviews/Reviews";
import ReviewButton from "@/components/ui/ReviewButton";
import { getReviews } from "@/lib/reviews";
import { getTranslations } from "next-intl/server";

export default async function ReviewsPage() {
  const t = await getTranslations("reviews");

  const reviews = await getReviews();

  return (
    <main
      className="
        w-full
        overflow-hidden
        bg-[#f5f3f0]
        text-neutral-900
        dark:bg-neutral-950
        dark:text-white
        px-4
        pt-24
        pb-16
        sm:px-6
        sm:pt-28
        sm:pb-20
        lg:px-10
        lg:pt-32
        lg:pb-24
      "
    >
      {/* Reviews */}
      <Reviews reviews={reviews} />

      {/* Review section */}
      <section
        id="review-form"
        className="
          mx-auto
          w-full
          max-w-7xl
          mt-8
          scroll-mt-24
          sm:mt-12
          lg:mt-16
        "
      >
        {/* Header */}
        <div
          className="
            mx-auto
            mb-10
            max-w-2xl
            text-center
            sm:mb-12
            lg:mb-16
          "
        >
          <span
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#a08b76]
              sm:text-xs
            "
          >
            Reviews
          </span>

          <h1
            className="
              mt-3
              text-3xl
              font-bold
              tracking-tight
              leading-[1.1]
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            {t("title")}
          </h1>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-neutral-500
              sm:text-base
              sm:leading-8
              dark:text-neutral-400
            "
          >
            {t("subtitle")}
          </p>
        </div>

        {/* Form */}
        <ReviewForm />
      </section>
      <ReviewButton />
    </main>
  );
}