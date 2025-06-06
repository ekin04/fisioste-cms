import { FormContatti } from "./components/FormContatti";
import { GrigliaContatti } from "./components/GrigliaContatti";
import { Mappa } from "./components/Mappa";
import { HeroContatti } from "./components/HeroContatti";

interface ContattiProps {}

const Contatti: React.FC<ContattiProps> = () => {
  return (
    <>
      <HeroContatti />
      <div className="container m-auto py-8">
        <GrigliaContatti />
        <hr className="border-t border-gray-300 w-full mb-10 mt-10" />
        <div className="grid md:grid-cols-2 gap-16 lg:gap-32 md:h-[550px]">
          <Mappa />
          <FormContatti />
        </div>
      </div>
    </>
  );
};

export default Contatti;
