import React from 'react';
import Image from "next/image";
import configData from "@content/settings.json";

interface GrigliaContattiProps {
}

export const GrigliaContatti: React.FC<GrigliaContattiProps> = ({}) => {
    return (
        <div className="grid grid-cols-2 mt-10 lg:mt-0 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center md:border-r md:border-gray-200"
                 data-aos="fade-down"
                 data-aos-duration="2000"
                 data-aos-once="true"
            >
                <Image src={'/img/loghi/smartphone1.webp'} width="100" height="100" className='h-[100px] w-[100px]'
                       alt="Fisioste smartphone"/>
                <div className="flex flex-col text-center">
                    <h2 className="text-[25px] text-secondary mt-4">Telefono</h2>
                    <a href="tel:+39 3288349050"
                       className="text-secondary text-base xl:text-[18px] font-light hover:cursor-pointer hover:underline">+39
                        3288349050 </a>
                </div>
            </div>
            <div className="flex flex-col items-center md:border-r md:border-gray-200"
                 data-aos="fade-down"
                 data-aos-duration="2000"
                 data-aos-once="true"
                 data-aos-delay={250}
            >
                <Image src={'/img/loghi/pc_email.png'} width="100" height="100" className='h-[100px] w-[100px]'
                       alt="Fisioste smartphone"/>
                <div className="flex flex-col text-center">
                    <h2 className="text-[25px] text-secondary mt-4">Email</h2>
                    <a href="mailto:info@fisioste.it"
                       className="text-secondary text-base xl:text-[18px] font-light hover:cursor-pointer hover:underline">info@fisioste.it</a>
                </div>
            </div>
            <div className="flex flex-col items-center md:border-r md:border-gray-200"
                 data-aos="fade-down"
                 data-aos-duration="2000"
                 data-aos-once="true"
                 data-aos-delay={500}
            >
                <Image src={'/img/loghi/pin1.png'} width="100" height="100" className='h-[100px] w-[100px]'
                       alt="Fisioste pin"/>
                <div className="flex flex-col text-center">
                    <h2 className="text-[25px] text-secondary mt-4">Indirizzo</h2>
                    <a className="text-secondary text-center text-base xl:text-[18px] font-light hover:underline"
                       rel="noreferrer"
                       target="_blank" href="https://g.page/Fisioste?share">Viale della Resistenza,<br/> 29/a
                        64100 Teramo</a>
                </div>
            </div>
            <div className="flex flex-col items-center"
                 data-aos="fade-down"
                 data-aos-duration="2000"
                 data-aos-once="true"
                 data-aos-delay={750}
            >
                <Image src={'/img/loghi/clock1.png'} width="100" height="100" className='h-[100px] w-[100px]'
                       alt="Fisioste pin"/>
                <div className="flex flex-col text-center">
                    <h2 className="text-[25px] text-secondary mt-4">Orari</h2>
                    <span className="text-secondary text-base xl:text-[18px] font-light"
                    >Lun-Ven / 8:00 - 21:00</span>
                </div>
            </div>
        </div>
    )

}