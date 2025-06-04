import { servizi } from "@/app/api/keystatic/Collection";
interface ElencoServiziProps {
  
}

export const ElencoServizi: React.FC<ElencoServiziProps> = ({}) => {
  return (
    <div className="container m-auto flex flex-col py-6">
  <div className="flex mx-auto" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
    <div className="p-6 rounded-2xl bg-[#e1edff] hidden lg:flex w-1/4">
      <div className="flex flex-col">
        <h2 className="text-2xl xl:text-[25px] mb-2 text-primary">Tutti i Servizi</h2>
        <ul className="ml-5">
            {servizi.map(({ slug, entry: { title } }) => (
              <li key={slug} className="text-base mb-2">{title}</li>
            ))}
        </ul>
      </div>
    </div>
    <div className="w-full lg:w-3/4 flex justify-center items-center">
      {/* Qui il carosello */}
      <div className="w-full h-64 bg-gray-200 rounded-lg">Carosello Placeholder</div>
    </div>
  </div>

  <div className="flex flex-col w-full text-center items-center mt-20" data-aos="zoom-out" data-aos-duration="1000" data-aos-once="true">
    <h1 className="mb-2 text-secondary">Esperienza, empatia, fiducia</h1>
    <hr className="border border-secondary w-[100px] mb-5" />
  </div>

  <div className="grid md:grid-cols-3 py-20 gap-20">
    <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
      <div className="w-[150px] h-[150px] shadow-2xl rounded-full bg-orange-400 flex justify-center items-center">
        <span className="text-5xl text-white">1250</span>
      </div>
      <h2 className="mt-10 text-center">Prestazioni erogate</h2>
    </div>

    <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" data-aos-delay="250">
      <div className="w-[150px] h-[150px] shadow-2xl rounded-full bg-orange-400 flex justify-center items-center">
        <span className="text-5xl text-white">150</span>
      </div>
      <h2 className="mt-10 text-center">Nuovi pazienti</h2>
    </div>

    <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" data-aos-delay="250">
      <div className="w-[150px] h-[150px] shadow-2xl rounded-full bg-orange-400 flex justify-center items-center">
        <span className="text-5xl text-white">5</span>
      </div>
      <h2 className="mt-10 text-center">Dipendenti</h2>
    </div>
  </div>
</div>

  );
};