import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SpecialistiBenessereProps {}

export const SpecialistiBenessere: React.FC<
  SpecialistiBenessereProps
> = ({}) => {
  return (
    <div className="w-full bg-[#e1edff] pt-16 pb-16 px-6 flex justify-center">
      <div className="container text-center">
        <h3 className="text-4xl font-light text-secondary md:text-6xl">
          {/*Specialisti del <span className="text-secondary">benessere</span>*/}
          Siamo specializzati in
        </h3>
        <div className="max-w-md mx-auto mt-16 lg:max-w-none lg:grid lg:grid-cols-3 lg:gap-16 lg:px-10">
          <div
            className="flex flex-col items-center justify-between mb-16 lg:mb-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="rounded-full ring-4 ring-white pt-[6px] px-[6px] pb-[1px] mb-4">
              <Image
                src={"/img/cms/home/colonna.webp"}
                width="180"
                height="180"
                alt="Fisioste colonna"
                className="rounded-full w-[180px] h-[180px]"
              />
            </div>
            <h2 className="text-[25px] text-secondary">
              Clinica Della Colonna
            </h2>
            <div>
              <div className="p-5 rounded-2xl bg-white mt-3 flex items-center lg:min-h-[140px]">
                <p className="text-base text-secondary">
                  Per combattere tutte le cause del mal di schiena: Ernia del
                  disco, disfunzioni di movimento, alterazioni posturali,
                  stress, artrosi.
                </p>
              </div>
              <Link href="/servizi/clinica-della-colonna">
                <button className="px-8 py-2 w-full mt-5 rounded-full bg-secondary text-white text-[14px] hover:opacity-80">
                  SCOPRI DI PIU
                </button>
              </Link>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-between mb-16 lg:mb-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <div className="rounded-full ring-4 ring-white pt-[6px] px-[6px] pb-[1px] mb-4">
              <Image
                src={"/img/cms/home/fisioestetica.webp"}
                width="180"
                height="180"
                alt="Fisioste fisioestetica"
                className="rounded-full w-[180px] h-[180px]"
              />
            </div>
            <h2 className="text-[25px] text-secondary">
              Fisioestetica Dermatofunzionale
            </h2>
            <div>
              <div className="p-5 rounded-2xl bg-white mt-3 flex items-center lg:min-h-[140px]">
                <p className="text-base text-secondary">
                  Trattamento di: cellulite, tessuto adiposo localizzato,
                  smagliature dimagrimento, gambe gonfie e pesanti, acne, invecchiamento cutaneo.
                </p>
              </div>
              <Link href="/servizi/fisioestetica-dermatofunzionale">
                <button className="px-8 py-2 w-full mt-5 rounded-full bg-secondary text-white text-[14px] hover:opacity-80">
                  SCOPRI DI PIU
                </button>
              </Link>
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-between mb-16 lg:mb-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="rounded-full ring-4 ring-white pt-[6px] px-[6px] pb-[1px] mb-4">
              <Image
                src={"/img/cms/home/pavimento-pelvico.webp"}
                width="180"
                height="180"
                alt="Fisioste Riabilitazione pavimento pelvico"
                className="rounded-full w-[180px] h-[180px]"
              />
            </div>
            <h2 className="text-[25px] text-secondary">
              Riabilitazione Pavimento Pelvico
            </h2>
            <div>
              <div className="p-5 rounded-2xl bg-white mt-3 flex items-center lg:min-h-[140px]">
                <p className="text-base text-secondary">
                È una branca della fisioterapia che si occupa della cura e della prevenzione delle condizioni che possono presentarsi sia nel sesso femminile che in quello maschile.
                </p>
              </div>
              <Link href="/servizi/riabilitazione-pavimento-pelvico">
                <button className="px-8 py-2 w-full mt-5 rounded-full bg-secondary text-white text-[14px] hover:opacity-80">
                  SCOPRI DI PIU
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
