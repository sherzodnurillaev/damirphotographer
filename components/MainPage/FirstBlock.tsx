'use client'

export default function Banner() {
  return (
    <div className="relative h-[350px] md:h-screen overflow-hidden rounded-[4px]">

      {/* Видео */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/26851462-929f-4c2e-9fbe-8e0e4af03034.mp4" type="video/mp4" />
      </video>

      {/* Затемнение */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Контент */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-2xl md:text-4xl font-bold">
          Lorem ipsum, dolor
        </h1>

        <p className="max-w-[700px] mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptatibus odit impedit aut error sunt.
        </p>
      </div>

    </div>
  );
}