
import { ServicesSection } from "./ServiceSection";
import { servizi } from "@/app/api/keystatic/Collection";

interface ElencoServiziProps {}

export const ElencoServizi: React.FC<ElencoServiziProps> = ({}) => {
  const cleanedServices = servizi.slice(0, 10).map(({ slug, entry }) => ({
    slug,
    entry: {
      ...entry,
      content: undefined, // oppure semplicemente ometti la proprietà
    },
  }))
  return (
   <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-sm text-gray-900 font-bold tracking-wider uppercase mb-2">I nostri servizi</h2>
          <h1 className="text-4xl md:text-5xl font-light text-secondary mb-4">Fisioterapia Professionale</h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Scopri i nostri trattamenti personalizzati per migliorare la tua salute e benessere
          </p>
        </div>
        <ServicesSection initialServices={cleanedServices}/>
      </div>
  );
};