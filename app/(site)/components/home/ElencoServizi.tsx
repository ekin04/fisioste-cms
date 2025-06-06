import { servizi } from "@/app/api/keystatic/Collection";
interface ElencoServiziProps {
  
}

export const ElencoServizi: React.FC<ElencoServiziProps> = ({}) => {
  return (
    <div className="container flex flex-col py-6 m-auto">
  <div className="flex mx-auto" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
    <div className="p-6 rounded-2xl bg-[#e1edff] hidden lg:flex w-1/4">
      <div className="flex flex-col">
        <h2 className="text-2xl xl:text-[25px] mb-2 text-primary">Tutti i Servizi</h2>
        <ul className="ml-5">
            {servizi.map(({ slug, entry: { title } }) => (
              <li key={slug} className="mb-2 text-base">{title}</li>
            ))}
        </ul>
      </div>
    </div>
    <div className="flex items-center justify-center w-full lg:w-3/4">
      {/* Qui il carosello */}
      <div className="w-full h-64 bg-gray-200 rounded-lg">Carosello Placeholder</div>
    </div>
  </div>

  <div className="flex flex-col items-center w-full mt-20 text-center" data-aos="zoom-out" data-aos-duration="1000" data-aos-once="true">
    <h1 className="mb-2 text-secondary">Esperienza, empatia, fiducia</h1>
    <hr className="border border-secondary w-[100px] mb-5" />
  </div>

  <div className="grid gap-20 py-20 md:grid-cols-3">
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