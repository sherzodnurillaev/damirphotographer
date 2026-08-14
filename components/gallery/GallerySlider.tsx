"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

interface GalleryImage {
  id: number | string;
  image: string;
  alt?: string;
}

interface Props {
  images: GalleryImage[];
}

export default function GallerySlider({ images }: Props) {
  if (!images || images.length === 0) {
    return null;
  }

  // Разбиваем фотографии на группы по 4
  const slides: GalleryImage[][] = [];

  for (let i = 0; i < images.length; i += 4) {
    slides.push(images.slice(i, i + 4));
  }

  return (
    <section className="w-full px-5 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          slidesPerView={1}
          loop={slides.length > 1}
          speed={1800}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          className="w-full"
        >
          {slides.map((slide, slideIndex) => (
            <SwiperSlide key={slideIndex}>

              {/* DESKTOP */}
              <div className="hidden lg:block">

                {/* 3 картинки сверху */}
                <div className="grid grid-cols-3 gap-6">

                  {slide.slice(0, 3).map((item) => (
                    <GalleryCard
                      key={item.id}
                      item={item}
                    />
                  ))}

                </div>

                {/* 1 картинка снизу */}
                {slide[3] && (
                  <div className="mt-6 flex justify-center">
                    <div className="w-1/3">
                      <GalleryCard item={slide[3]} />
                    </div>
                  </div>
                )}

              </div>

              {/* TABLET */}
              <div className="hidden sm:grid lg:hidden grid-cols-2 gap-5">

                {slide.map((item) => (
                  <GalleryCard
                    key={item.id}
                    item={item}
                  />
                ))}

              </div>

              {/* MOBILE */}
              <div className="grid sm:hidden grid-cols-1 gap-5">

                {slide.slice(0, 2).map((item) => (
                  <GalleryCard
                    key={item.id}
                    item={item}
                  />
                ))}

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

function GalleryCard({
  item,
}: {
  item: GalleryImage;
}) {
  return (
    <div
      className="
        relative
        aspect-[4/5]
        overflow-hidden
        rounded-[28px]
        bg-neutral-100
        unoptimized
        dark:bg-neutral-900
      "
    >
      <Image
        src={item.image}
        alt={item.alt ?? "Damir Registan photography"}
        fill
        sizes="
          (max-width: 640px) 100vw,
          (max-width: 1024px) 50vw,
          33vw
        "
        className="
          object-cover
          transition-transform
          duration-1000
          hover:scale-105
        "
      />
    </div>
  );
}