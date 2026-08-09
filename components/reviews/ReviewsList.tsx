import { Star } from "lucide-react";

interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export default function ReviewsList({
  reviews,
}: {
  reviews: Review[];
}) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {reviews.map((review) => (

        <article
          key={review.id}
          className="
            rounded-3xl
            border
            border-neutral-200
            dark:border-neutral-800
            p-6
            bg-white
            dark:bg-neutral-900
          "
        >

          <div className="flex gap-1">

            {Array.from({
              length: review.rating,
            }).map((_, index) => (
              <Star
                key={index}
                size={18}
                fill="currentColor"
              />
            ))}

          </div>

          <p className="mt-5 text-neutral-600 dark:text-neutral-300 leading-7">
            “{review.text}”
          </p>

          <p className="mt-6 font-semibold">
            {review.name}
          </p>

        </article>

      ))}

    </div>
  );
}