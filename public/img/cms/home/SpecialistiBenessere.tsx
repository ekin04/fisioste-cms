import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SpecialistiBenessereProps {}

export const SpecialistiBenessere: React.FC<
  SpecialistiBenessereProps
> = ({}) => {
  return (
    <div className="w-full bg-[#e1edff] pt-16 pb-16 flex justify-center">
      <div className="container text-center">
        <h1 className="text-secondary">
          {/*Specialisti del <span className="text-secondary">benessere</span>*/}
          Siamo specializzati in
        </h1>
        <div className=" mx-auto max-w-md lg:max-w-none lg:grid lg:grid-cols-3 lg:gap-16 mt-16">
          <div
            className="flex flex-col justify-between items-center mb-16 lg:mb-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="rounded-full ring-4 ring-white pt-[6px] px-[6px] pb-[1px] mb-4">
              <Image
                src={"/img/2024/colonna.webp"}
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
              <div className="p-5 rounded-2xl bg-white mt-3">
                <p className="text-secondary text-base">
                  Per combattere tutte le cause del mal di schiena: Ernia del
                  disco, disfunzioni di movimento, alterazioni posturali,
                  stress, artrosi.
                </p>
              </div>
              <Link href="/servizi/1" passHref>
                <button className="px-8 py-2 w-full mt-5 rounded-full bg-secondary text-white text-[14px] hover:opacity-80">
                  SCOPRI DI PIU
                </button>
              </Link>
            </div>
          </div>
          <div
            className="flex flex-col justify-between items-center mb-16 lg:mb-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <div className="rounded-full ring-4 ring-white pt-[6px] px-[6px] pb-[1px] mb-4">
              <Image
                src={"/img/2024/fisioestetica.webp"}
                width="180"
                height="180"
                layout="fixed"
                alt="Fisioste fisioestetica"
                className="rounded-full w-[180px] h-[180px]"
              />
            </div>
            <h2 className="text-[25px] text-secondary">
              Fisioestetica Dermatofunzionale
            </h2>
            <div>
              <div className="p-5 rounded-2xl bg-white mt-3">
                <p className="text-secondary text-base">
                  Trattamento di: cellulite, tessuto adiposo localizzato,
                  smagliature dimagrimento, gambe gonfie e pesanti, acne, invecchiamento cutaneo.
                </p>
              </div>
              <Link href="/servizi/2" passHref>
                <button className="px-8 py-2 w-full mt-5 rounded-full bg-secondary text-white text-[14px] hover:opacity-80">
                  SCOPRI DI PIU
                </button>
              </Link>
            </div>
          </div>

          <div
            className="flex flex-col justify-between items-center mb-16 lg:mb-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="rounded-full ring-4 ring-white pt-[6px] px-[6px] pb-[1px] mb-4">
              <Image
                src={"/img/2024/pavimento-pelvico.webp"}
                width="180"
                height="180"
                layout="fixed"
                alt="Fisioste Riabilitazione pavimento pelvico"
                className="rounded-full w-[180px] h-[180px]"
              />
            </div>
            <h2 className="text-[25px] text-secondary">
              Riabilitazione Pavimento Pelvico
            </h2>
            <div>
              <div className="p-5 rounded-2xl bg-white mt-3">
                <p className="text-secondary text-base">
                È una branca della fisioterapia che si occupa della cura e della prevenzione delle condizioni che possono presentarsi sia nel sesso femminile che in quello maschile.
                </p>
              </div>
              <Link href="/servizi/3" passHref>
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
