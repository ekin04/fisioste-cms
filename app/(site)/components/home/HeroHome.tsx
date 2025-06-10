import Link from "next/link";
import { FaPhone, FaStar } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import "aos/dist/aos.css";
import { CaroselloHomeHero } from "./CaroselloHomeHero";
import Image from "next/image";
import dataSettings from "@content/settings.json";
import logo from "@public/img/loghi/Fisioste_Logo.webp";
import scritta from "@public/img/loghi/Fiosioste_Font.webp";

export const HeroHome: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="px-4 pt-8 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-20">
        <div
          className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2"
          data-aos="fade-up-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          {/* Left Content */}
          <div className="space-y-8 " data-aos="fade-up">
            <div className="flex flex-col items-center justify-center space-y-4 text-center lg:text-left lg:items-start">
              <div className="inline-flex items-center -ml-8 lg:hidden">
                <Image
                  src={logo}
                  alt="Fisioste Logo"
                  width={80}
                  height={80}
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-easing="ease-in"
                />
                <Image
                  src={scritta}
                  alt="Fisioste Logo"
                  width={200}
                  height={200}
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  data-aos-easing="ease-in"
                />
              </div>

              <h1
                className="text-5xl font-extrabold leading-tight tracking-tight text-transparent md:text-6xl text-balance drop-shadow-lg bg-gradient-to-r from-secondary to-primary bg-clip-text"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <span>Fisioterapia</span>
                <span> e</span>
                <br />
                <span>Osteopatia</span>
                <br />
                <span>Teramo</span>
              </h1>

              <div
                className="inline-flex items-center px-4 py-2 space-x-2 text-sm font-medium rounded-full bg-primary/10 text-primary"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span>Centro Specializzato dal 2010</span>
                <FaStar className="w-4 h-4 text-yellow-400" />
              </div>

              <p
                className="max-w-md text-base text-gray-600 sm:text-lg"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                Professionalità e tecnologia all'avanguardia al servizio del tuo
                benessere e del recupero completo del paziente.
              </p>
            </div>

            <div
              className="grid items-center max-w-2xl grid-cols-1 gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-4 sm:items-start lg:max-w-lg lg:mx-0"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <Link
                href={"tel:" + dataSettings.telefono}
                className="flex items-center justify-center col-span-1 px-6 py-4 text-lg font-medium text-white transition-all shadow-md bg-secondary hover:bg-secondary/90 rounded-xl lg:col-span-2 sm:w-auto"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-easing="ease-in"
              >
                <FaPhone className="mr-2" />
                {dataSettings.telefono}
              </Link>
              <Link
                href={"tel:" + dataSettings.cellulare}
                className="flex items-center justify-center col-span-1 px-6 py-4 text-lg font-medium text-white transition-all shadow-md bg-secondary hover:bg-secondary/90 rounded-xl lg:col-span-2 sm:w-auto"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-easing="ease-in"
              >
                <GiSmartphone className="mr-2 text-2xl" />
                {dataSettings.cellulare}
              </Link>
              <Link
                href="/servizi"
                className="w-full col-span-1 px-6 py-4 text-lg font-medium text-center transition-all border-2 border-secondary text-secondary hover:bg-secondary/10 rounded-xl sm:col-span-2 lg:col-span-4 sm:w-auto"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                Scopri i Servizi
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative w-full max-w-xl mx-auto lg:mx-0"
            data-aos="fade-up-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="p-4 shadow-2xl bg-gradient-to-br from-secondary to-secondary/90 rounded-3xl sm:p-6">
              <CaroselloHomeHero />
            </div>

            {/* Decorative Circles */}
            <div className="absolute hidden w-20 h-20 rounded-full sm:block -top-6 -right-6 bg-primary/30 blur-sm"></div>
            <div className="absolute hidden rounded-full sm:block -bottom-6 -left-6 w-28 h-28 bg-primary/20 blur-sm"></div>
          </div>
        </div>
      </div>

      {/* Optional Background Fade Right */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none bg-gradient-to-l from-primary/10 to-transparent"></div>
    </section>
  );
};

