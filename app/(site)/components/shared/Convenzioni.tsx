"use client";

import Image from "next/image";
import Link from "next/link";
import partners from "@content/convenzioni.json";

export default function PartnerLogosSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 ">
        {/* Header */}
        <div className="text-center mb-12 max-w-5xl mx-auto">
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <h3 className="mb-2 text-4xl md:text-5xl font-light">
              Le nostre <span className="text-secondary">convenzioni</span>
            </h3>
            <hr className="border border-gray-600 w-[100px] mb-5 mx-auto" />
            <div className="px-2 py-5">
              <h4 className="text-secondary text-xl md:text-2xl mb-2">
                HAI UN FONDO DI ASSISTENZA SANITARIA INTEGRATIVA O IL TUO
                CONTRATTO DI LAVORO NE PREVEDE UNO?
              </h4>
              <p className="text-base md:text-lg mb-8">
                Il centro FISIOSTE è convenzionato con i maggiori fondi di
                Assistenza Sanitaria Integrativa, che coprono economicamente la
                maggior parte delle prestazioni effettuate.
              </p>
              <h4 className="text-secondary text-xl md:text-2xl mb-2">
                COS’E’?
              </h4>
              <p className="text-base md:text-lg mb-8">
                Il Fondo di Assistenza Sanitaria Integrativa è lo strumento di
                welfare aziendale integrativo nato per <br />
                garantire ai cittadini un’adeguata e tempestiva copertura
                sanitaria, soprattutto durante l’età lavorativa.
              </p>
              <h4 className="text-secondary text-xl md:text-2xl mb-2">
                CHI RIGUARDA?
              </h4>
              <p className="text-base md:text-lg mb-8">
                L’assistenza sanitaria integrativa, può riguardare il singolo
                cittadino, o potrebbe essere già prevista nel contratto
                collettivo di lavoro,
                <br />
                dagli albi professionali, o da contratti integrativi predisposti
                dalle singole aziende.
              </p>
              <h4 className="text-secondary text-xl md:text-2xl mb-2">
                A COSA SERVE?
              </h4>
              <p className="text-base md:text-lg">
                Con l’assistenza sanitari integrativa, puoi evitare le lunghe
                liste d’attesa e soprattutto avere agevolazioni economiche sulle
                prestazioni; inoltre, i fondi offrono una copertura totale o
                parziale delle spese sostenute presso la struttura
                convenzionata.
              </p>
            </div>
          </div>
        </div>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden scroll-wrapper">
          {/* First Row - Left to Right */}
          <div className="flex animate-scroll-left mb-8">
            {[...partners.convenzioni, ...partners.convenzioni].map(
              (partner, index) => (
                <div key={`row1-${index}`} className="flex-shrink-0 mx-6">
                  <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 border border-gray-100">
                    <div className="flex items-center justify-center h-20 w-40 md:h-28 md:w-52">
                      <Link
                        href={partner.url || ""}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={partner.immagine}
                          alt={`${partner.nome} logo`}
                          width={150}
                          height={200}
                          className="h-20 md:h-28 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Second Row - Right to Left */}
          <div className="flex animate-scroll-right pb-5">
            {[
              ...partners.convenzioni.slice().reverse(),
              ...partners.convenzioni.slice().reverse(),
            ].map((partner, index) => (
              <div key={`row2-${index}`} className="flex-shrink-0 mx-6">
                <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 border border-gray-100">
                  <div className="flex items-center justify-center h-20 w-40 md:h-28 md:w-52">
                    <Link
                      href={partner.url || ""}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={partner.immagine}
                        alt={`${partner.nome} logo`}
                        width={150}
                        height={200}
                        className="h-20 md:h-28 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h4 className="text-secondary text-xl md:text-2xl mb-8">
            VUOI DIVENTARE UN NOSTRO PARTNER?
          </h4>
          <Link
            href="/contatti"
            className="bg-secondary hover:bg-primary text-white text-[16px] px-8 py-3 rounded-lg transition-colors duration-200"
          >
            CONTATTACI
          </Link>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left,
        .animate-scroll-right {
          animation-play-state: running;
        }

        .scroll-wrapper:hover .animate-scroll-left,
        .scroll-wrapper:hover .animate-scroll-right {
          animation-play-state: paused;
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }

        @media (max-width: 768px) {
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-400%);
          }
        }
           @keyframes scroll-right {
          0% {
            transform: translateX(-400%);
          }
          100% {
            transform: translateX(0);
          }
        }
          .animate-scroll-left {
            animation: scroll-left 15s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 15s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}
