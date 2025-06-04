import Link from "next/link";
import { FaPhone, FaStar } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import { CaroselloHomeHero } from "./CaroselloHomeHero";
import Image from "next/image";
import dataSettings from "@content/settings.json";
import logo from "@public/img/loghi/Fisioste_Logo.webp";
import scritta from "@public/img/loghi/Fiosioste_Font.webp";

export const HeroHome: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-8 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 ">
            <div className="space-y-4 flex flex-col items-center justify-center text-center lg:text-left lg:items-start">
              <div className="inline-flex items-center -ml-8 lg:hidden">
                <Image src={logo} alt="Fisioste Logo" width={80} height={80} />
                <Image
                  src={scritta}
                  alt="Fisioste Logo"
                  width={200}
                  height={200}
                />
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-balance drop-shadow-lg bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                <span>Fisioterapia</span>
                <span> e</span>
                <br />
                <span>Osteopatia</span>
                <br />
                <span>Teramo</span>
              </h1>

              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Centro Specializzato dal 2010</span>
                <FaStar className="w-4 h-4 text-yellow-400" />
              </div>

              <p className="text-base sm:text-lg text-gray-600 max-w-md">
                Professionalità e tecnologia all'avanguardia al servizio del tuo
                benessere e del recupero completo del paziente.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-2xl mx-auto gap-4 items-center sm:items-start lg:max-w-lg lg:mx-0">
              <Link
                href={"tel:" + dataSettings.telefono}
                className="bg-secondary hover:bg-secondary/90 text-white px-6 py-4 rounded-xl text-lg font-medium flex items-center justify-center transition-all shadow-md col-span-1 lg:col-span-2 sm:w-auto"
              >
                <FaPhone className="mr-2" />
                {dataSettings.telefono}
              </Link>
              <Link
                href={"tel:" + dataSettings.cellulare}
                className="bg-secondary hover:bg-secondary/90 text-white px-6 py-4 rounded-xl text-lg font-medium flex items-center justify-center transition-all shadow-md col-span-1 lg:col-span-2 sm:w-auto"
              >
                <GiSmartphone className="mr-2 text-2xl" />
                {dataSettings.cellulare}
              </Link>
              <Link
                href="/servizi"
                className="border-2 w-full text-center border-secondary text-secondary hover:bg-secondary/10 px-6 py-4 rounded-xl text-lg font-medium transition-all col-span-1 sm:col-span-2 lg:col-span-4 sm:w-auto"
              >
                Scopri i Servizi
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full max-w-xl mx-auto lg:mx-0">
            <div className="bg-gradient-to-br from-secondary to-secondary/90 rounded-3xl p-4 sm:p-6 shadow-2xl">
              <CaroselloHomeHero />
            </div>

            {/* Decorative Circles */}
            <div className="hidden sm:block absolute -top-6 -right-6 w-20 h-20 bg-primary/30 rounded-full blur-sm"></div>
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-28 h-28 bg-primary/20 rounded-full blur-sm"></div>
          </div>
        </div>
      </div>

      {/* Optional Background Fade Right */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
    </section>
  );
};
