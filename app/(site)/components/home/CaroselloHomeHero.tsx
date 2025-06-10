"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import sliderData from "@content/pages/home.json";

interface CaroselloHomeHeroProps {}

export const CaroselloHomeHero: React.FC<CaroselloHomeHeroProps> = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop
        allowTouchMove={false}
        speed={1000}
        className="w-full overflow-hidden shadow-lg rounded-3xl"
      >
        {sliderData.slide.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[300px] sm:h-[390px] md:h-[480px] lg:h-[480px]">
              <Image
                src={item.immagine}
                alt={item.alt}
                fill
                priority={index === 0}
                className="object-cover rounded-3xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
