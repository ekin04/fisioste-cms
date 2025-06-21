"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Link from "next/link";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

export function ServicesSection({
  initialServices,
}: {
  initialServices: any[];
}) {
  const [services, setServices] = useState<any[]>(initialServices);
  const [activeService, setActiveService] = useState<number | null>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (initialServices.length > 0) {
      setActiveService(initialServices[0].entry.id);
    }
  }, [initialServices]);

  useEffect(() => {
    if (swiperRef.current?.swiper && activeService !== null) {
      const index = services.findIndex(
        (service) => service.entry.id === activeService
      );
      if (index !== -1) {
        swiperRef.current.swiper.slideTo(index);
      }
    }
  }, [activeService, services]);

  if (services.length === 0) {
    return (
      <div className="py-12 text-center text-gray-500">
        Caricamento servizi...
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-8 lg:flex-row">
      {/* Lista servizi */}
      <div className="hidden space-y-2 lg:block lg:w-1/3">
        <div className="sticky p-6 bg-white shadow-lg rounded-2xl top-24">
          <h2 className="pb-4 mb-6 text-3xl font-light border-b text-secondary">
            I Nostri Servizi
          </h2>
          <div className="flex flex-col gap-3">
            {services.map((service) => (
              <button
                key={service.entry.id}
                onClick={() => setActiveService(service.entry.id)}
                className={`px-4 py-3 text-left rounded-xl transition-all flex items-center gap-1 w-full ${
                  activeService === service.entry.id
                    ? `bg-secondary text-white shadow-md`
                    : `hover:bg-primary/10 text-gray-700`
                }`}
              >
                <span className="text-lg font-medium">
                  {service.entry.title}
                </span>
              </button>
            ))}
          </div>
          <div className="pt-8 border-t">
            <a
              href="/servizi"
              className="px-6 py-3 text-lg font-medium text-white transition-colors rounded-lg shadow-md bg-secondary hover:bg-primary hover:shadow-lg"
            >
              Scopri tutti i servizi
            </a>
          </div>
        </div>
      </div>

      {/* Swiper con gradienti laterali */}
      <div className="relative w-full h-full my-auto lg:w-2/3">
        {/* Gradient overlay sinistro */}
        <div className="absolute top-0 left-0 z-20 w-16 h-full pointer-events-none bg-gradient-to-r from-white to-transparent" />
        {/* Gradient overlay destro */}
        <div className="absolute top-0 right-0 z-20 w-16 h-full pointer-events-none bg-gradient-to-l from-white to-transparent" />

        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          autoplay={{ delay: 3500, disableOnInteraction: true }}
          spaceBetween={30}
          onSlideChange={(swiper) =>
            setActiveService(services[swiper.activeIndex].entry.id)
          }
          className="rounded-2xl"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2, centeredSlides: true },
            1024: { slidesPerView: 2, centeredSlides: true },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.entry.id}>
              <div className="h-full overflow-hidden bg-white shadow-xl border-1 border-secondary rounded-2xl">
                <div className="flex flex-col gap-4">
                  <div className="relative w-full aspect-square h-96">
                    <Image
                      src={service.entry.image}
                      alt={service.entry.title}
                      fill
                      className="object-cover object-center h-96"
                      priority
                    />
                  </div>
                  <div className="px-6 py-4">
                    <h3 className="text-3xl font-light text-secondary">
                      {service.entry.title}
                    </h3>
                    <div className="h-[1px] w-1/3 md:w-1/4 bg-secondary my-2" />
                    <p className="leading-relaxed text-gray-600">
                      {service.entry.description}
                    </p>
                    <div className="flex items-center w-full text-center">
                      <Link
                        href={`/servizi/${service.slug}`}
                        className="inline-block w-full px-6 py-3 mx-auto mt-6 font-medium text-center transition-colors bg-white border rounded-lg shadow-md text-secondary hover:bg-secondary hover:text-white hover:shadow-lg border-secondary"
                      >
                        SCOPRI DI PIÙ
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Pulsanti navigazione */}
          <div className="absolute z-30 -translate-y-1/2 cursor-pointer custom-prev top-1/2 left-2">
            <RiArrowLeftSLine className="text-3xl bg-white rounded-full shadow-md text-secondary xl:text-4xl" />
          </div>
          <div className="absolute z-30 -translate-y-1/2 cursor-pointer custom-next top-1/2 right-2">
            <RiArrowRightSLine className="text-3xl bg-white rounded-full shadow-md text-secondary xl:text-4xl" />
          </div>
        </Swiper>
      </div>
    </section>
  );
}
