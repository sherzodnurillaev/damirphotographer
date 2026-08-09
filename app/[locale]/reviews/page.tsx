import ReviewForm from "@/components/reviews/ReviewForm";
import ReviewsList from "@/components/reviews/ReviewsList";
import { getReviews } from "@/lib/reviews";

export default async function ReviewsPage() {

  const reviews = await getReviews();

  return (
    <main className="pt-32 pb-20 px-5">

      <section className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h1 className="text-4xl md:text-6xl font-bold">
            Отзывы
          </h1>

          <p className="mt-5 text-neutral-500">
            Ваше мнение очень важно для нас
          </p>

        </div>

        <ReviewForm />

        <div className="mt-24">

          <ReviewsList reviews={reviews} />

        </div>

      </section>

    </main>
  );
}