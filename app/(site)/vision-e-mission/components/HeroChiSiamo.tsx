import React from "react";

interface HeroChiSiamoProps {}

export const HeroChiSiamo: React.FC<HeroChiSiamoProps> = ({}) => {
  return (
    <>
      <div
        className="py-10 bg-gradient-to-t from-white to-[#d8e8ff] flex justify-start"
        data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        <div className="container m-auto">
          <h1 className="text-secondary">
            Vision
            <span className="text-black"> & Mission</span>
          </h1>
          <hr className="border border-secondary w-[200px] mt-2 mb-4" />

          <p className=" text-lg mb-2 mt-5">
            Il nostro Centro di Fisioterapia e Osteopatia a Teramo è
            specializzato nella cura delle patologie della colonna vertebrale,
            in estetica dermatofunzionale e riabilitazione pavimento pelvico.</p>
          <p className=" text-lg mb-2">
            Dal 2010 ci occupiamo della vostra salute e benessere.</p>
          <p className=" text-lg mb-2"> Il nostro
            STAFF è sempre in continuo aggiornamento sulle nuove metodiche in
            Fisioterapia e sulle tecnologie più innovative in terapia fisica per
            garantire il miglior approccio terapeutico personalizzato per ogni
            patologia. 
            </p>
          <p className=" text-lg mb-2">
            Coinvolgere attivamente i pazienti nel percorso
            riabilitativo e rieducativo è il nostro obiettivo principale.
          </p>
        </div>
      </div>
    </>
  );
};
