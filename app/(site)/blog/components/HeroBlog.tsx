import React from "react";

interface HeroBlogProps {}

export const HeroBlog: React.FC<HeroBlogProps> = ({}) => {
  return (
    <div className="h-[160px] md:h-[200px] bg-gradient-to-t from-white to-[#d8e8ff] flex justify-start">
      <div className="container m-auto">
        <h1 className="text-secondary">
          <span className="text-black">I Nostri </span>Articoli
        </h1>
        <hr className="border border-secondary w-[200px] mt-2 mb-4" />
      </div>
    </div>
  );
};
