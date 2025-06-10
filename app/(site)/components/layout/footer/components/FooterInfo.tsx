import React from 'react';
import Link from "next/link";
import CookieConsentComponent from "@components/layout/cookie-consent/Cookie";
import "vanilla-cookieconsent/dist/cookieconsent.css";

interface FooterInfoProps {
}

export const FooterInfo: React.FC<FooterInfoProps> = ({}) => {
    return(
        <div className="flex flex-col items-center justify-center pt-6 pb-12 text-center md:pb-0 md:pt-6 lg:pt-0 lg:border-l border-secondary">
            <p className="mb-2 text-base text-secondary">Tutti i diritti riservati - <span className="font-bold">FisioSte.it</span></p>
            <p className="mb-2 text-base text-secondary">P.Iva: <span className="font-bold">IT01750720672</span><br/></p>
            <p className="mb-2 text-base text-secondary">Web Design: <a className="font-bold hover:cursor-pointer hover:underline" href="https://digital-three.com" target="_blank" rel="noreferrer">digital-three.com</a><br/></p>

            <p className="mb-2 text-base text-secondary">
                <Link href="/cookie_policy">
                    <span className="mr-1 hover:cursor-pointer hover:underline">Cookie Policy</span>
                </Link>
                -
                <Link href="/privacy_policy">
                    <span className="ml-1 hover:cursor-pointer hover:underline">Privacy Policy</span>
                </Link>
            </p>
            <CookieConsentComponent/>
        </div>
    )

}