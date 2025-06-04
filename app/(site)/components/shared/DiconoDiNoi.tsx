"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
import Link from "next/link"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import testimonialsData from "@content/testimonial.json"

interface Testimonial {
  nome: string
  immagine: string
  rating: number
  descrizione: string
}

export default function TestimonialCarousel() {
  const testimonials: Testimonial[] = testimonialsData.testimonial

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )

  const QuoteIcon = () => (
    <svg className="absolute -top-2 -left-2 w-8 h-8 text-blue-200 opacity-50" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
    </svg>
  )

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light md:text-6xl text-gray-900 mb-4">Dicono di <span className="text-secondary">Noi</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Le testimonianze dei nostri pazienti sono la nostra migliore referenza. Scopri le loro esperienze con il
            centro Fisioste.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="relative px-6 md:px-12 lg:px-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            /* pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
              bulletClass: "swiper-pagination-bullet-custom",
              bulletActiveClass: "swiper-pagination-bullet-active-custom",
            }} */
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            loop={true}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="p-6 h-full flex flex-col">
                    {/* Header with Avatar and Rating */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                            <Image src={testimonial.immagine} alt={testimonial.nome} width={48} height={48} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">{testimonial.nome}</h3>
                        <StarRating rating={testimonial.rating} />
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="flex-1 relative">
                      <QuoteIcon />
                      <p className="text-gray-700 text-sm leading-relaxed pl-8 italic line-clamp-8">
                        {testimonial.descrizione}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute -left-2 top-1/2 -translate-y-1/2 bg-secondary hover:bg-primary text-white p-3 rounded-full shadow-lg transition-colors duration-200 z-10 group">
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="swiper-button-next-custom absolute -right-2  top-1/2 -translate-y-1/2 bg-secondary hover:bg-primary text-white p-3 rounded-full shadow-lg transition-colors duration-200 z-10 group">
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Custom Pagination */}
        {/* <div className="swiper-pagination-custom flex justify-center mt-8 gap-2"></div> */}

        {/* Summary Stats */}
        <div className="text-center mt-12">
          <Link href="https://www.google.com/search?sca_esv=9edba2248acd0033&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8tleV6Padgk3-ZvKQkWOUJHqXzQ2uYCYYJNPahcETehtxP75w0K6pfYrGYnDfYKgc1U3RvoJKLIz-_nCiOI0Xe6pMkZalW0NbmCoa_BY7Hd7xx2EdpF22rRxQBtce74HvrqI4E%3D&q=FISIOSTE+Fisioterapia+e+Osteopatia+a+Teramo+Recensioni&sa=X&ved=2ahUKEwiY2fOZ6cSNAxUZ-AIHHUb0A0cQ0bkNegQIKRAE&biw=1440&bih=878&dpr=1.5" target="_blank" className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
            <StarRating rating={5} />
            <span className="text-sm font-medium text-gray-700">
              Leggi tutte le 432 recensioni
            </span>
          </Link>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .testimonials-swiper {
          padding-bottom: 20px;
        }
        
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: #264193;
          transform: scale(1.2);
        }
        
        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .testimonials-swiper .swiper-slide {
          height: auto;
          display: flex;
        }
        
        .testimonials-swiper .swiper-slide > div {
          height: 100%;
        }
      `}</style>
    </section>
  )
}
