import { ElencoServizi } from "./components/home/ElencoServizi";
import {HeroHome}  from "./components/home/HeroHome";
import { SpecialistiBenessere } from "./components/home/SpecialistiBenessere";

export default async function Homepage() {
  return (
    <>
      <HeroHome />
      <SpecialistiBenessere />
      <ElencoServizi />
    </>
  );
}
