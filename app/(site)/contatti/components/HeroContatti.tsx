
import React from 'react';

export const HeroContatti: React.FC = () => {
    return (
        <section
            className="relative h-96 md:h-[450px] w-full flex items-center bg-gradient-to-t from-white to-[#d8e8ff] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/img/pages/ipopressiva_banner.webp')",
            }}
            role="banner"
            aria-label="Hero section contatti"
        >
            {/* Overlay for better text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
            
            <div className="container mx-auto px-4 relative z-10">
                <header>
                    <h1 className="text-secondary">
                        <span className="text-black">Entra in </span>
                        Contatto
                        <span className="text-black"> con noi</span>
                    </h1>
                    
                    <hr className="border border-secondary w-[200px] mt-2 mb-4" />
                    
                    <h2>
                        A completa disposizione per rispondere alle tue domande e fornirti la soluzione migliore alle tue esigenze.
                    </h2>
                </header>
            </div>
        </section>
    );
};

