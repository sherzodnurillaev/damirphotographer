import ReviewForm from "@/components/reviews/ReviewForm";
import Reviews from "@/components/reviews/Reviews";
import ReviewsList from "@/components/reviews/ReviewsList";
import { getReviews } from "@/lib/reviews";
import { getTranslations } from "next-intl/server";

export default async function ReviewsPage() {
  const t = await getTranslations("reviews");

  const reviews = await getReviews();

  return (
    <main className="pt-32 pb-20 px-5">

      {/* Reviews */}
      <Reviews reviews={reviews} />

      {/* Review section */}
      <section className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <h1 className="
            text-4xl
            font-bold
            md:text-6xl
          ">
            {t("title")}
          </h1>

          <p className="
            mt-5
            text-neutral-500
            dark:text-neutral-400
          ">
            {t("subtitle")}
          </p>

        </div>

        {/* Form */}
        <ReviewForm />

        {/* Reviews list */}
        {/* <div className="mt-24">

          <ReviewsList reviews={reviews} />

        </div> */}

      </section>

    </main>
  );
}