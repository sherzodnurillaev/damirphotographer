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
    <div
      className="
        grid
        grid-cols-1
        gap-px
        overflow-hidden
        border
        border-neutral-200
        bg-neutral-200

        dark:border-neutral-800
        dark:bg-neutral-800

        md:grid-cols-2
        lg:grid-cols-3
      "
    >
      {reviews.map((review) => (
        <article
          key={review.id}
          className="
            group
            flex
            h-full
            flex-col
            bg-white
            p-7
            transition-colors
            duration-500
            hover:bg-neutral-50

            dark:bg-neutral-950
            dark:hover:bg-neutral-900

            sm:p-8
            lg:p-10
          "
        >
          {/* Rating */}
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={15}
                strokeWidth={1.5}
                className={
                  index < review.rating
                    ? "fill-[rgb(93,87,81)] text-[rgb(93,87,81)] dark:fill-white dark:text-white"
                    : "text-neutral-300 dark:text-neutral-700"
                }
              />
            ))}
          </div>

          {/* Quote */}
          <div className="mt-7 flex-1">
            <span
              className="
                font-[var(--font-cormorant)]
                text-5xl
                leading-none
                text-neutral-300
                dark:text-neutral-700
              "
            >
              “
            </span>

            <p
              className="
                -mt-2
                break-words
                font-[var(--font-cormorant)]
                text-2xl
                font-medium
                leading-[1.25]
                text-neutral-800
                dark:text-neutral-200

                sm:text-3xl
              "
            >
              {review.text}
            </p>
          </div>

          {/* Author */}
          <div
            className="
              mt-8
              border-t
              border-neutral-200
              pt-5

              dark:border-neutral-800
            "
          >
            <p
              className="
                truncate
                font-[var(--font-manrope)]
                text-xs
                font-semibold
                uppercase
                tracking-[0.12em]
                text-neutral-900
                dark:text-white
              "
            >
              {review.name}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}