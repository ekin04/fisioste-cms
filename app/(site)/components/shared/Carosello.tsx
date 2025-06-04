"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import "swiper/css";
import "swiper/css/navigation";

export interface CaroselloItem {
  id: number;
  image: string;
  title: string;
  description: string;
  slug: string;
}

interface CaroselloProps {
  data: CaroselloItem[];
}

export const Carosello: React.FC<CaroselloProps> = ({ data }) => {
  const pathname = usePathname();
  const tipo = pathname.split("/")[1] || "news";

  return (
    <div className="relative w-full mx-auto lg:my-auto pb-6 overflow-visible max-w-7xl">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: false,
          },
          600: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          980: {
            slidesPerView: 3,
            centeredSlides: true,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="px-6 py-3 h-full">
              <div className="min-h-[500px] lg:min-h-[550px] flex flex-col justify-between bg-white rounded-xl shadow-md overflow-hidden p-4">
                <div
                  className="rounded-3xl w-full h-[220px] lg:h-[260px] mb-4 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.image})`
                  }}
                />
                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <h2 className="text-[25px] font-light text-secondary leading-snug mb-2">
                      {item.title}
                    </h2>
                    <hr className="border border-primary w-[100px] my-2" />
                    <p className="text-justify text-slate-800 line-clamp-4">
                      {item.description}
                    </p>
                  </div>
                  <Link href={`/${tipo}/${item.slug}`} className="mt-4">
                    <button className="px-8 py-2 w-full rounded-full transition text-[12px] text-secondary border-2 border-secondary hover:bg-secondary hover:text-white">
                      SCOPRI DI PIÙ
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom arrows */}
        <div className="custom-prev absolute top-1/2 -translate-y-1/2 left-2 z-30 cursor-pointer">
          <RiArrowLeftSLine className="bg-white shadow-md rounded-full text-secondary text-3xl xl:text-4xl" />
        </div>
        <div className="custom-next absolute top-1/2 -translate-y-1/2 right-2 z-30 cursor-pointer">
          <RiArrowRightSLine className="bg-white shadow-md rounded-full text-secondary text-3xl xl:text-4xl" />
        </div>
      </Swiper>
    </div>
  );
};
