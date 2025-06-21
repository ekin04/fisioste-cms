"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import dataNavbar from "@content/navbar.json";
import dataSettings from "@content/settings.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";

interface DesktopMenuProps {}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({}) => {
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 300
        ? setStickyClass("bg-white fixed top-0 left-0 z-40 transform duration-300")
        : setStickyClass("relative");
    }
  };
  const pathname = usePathname();

  return (
    <>
      <div className="hidden w-full bg-white md:block">
        <div className="container justify-between hidden px-4 py-3 m-auto lg:flex">
          <Link href="/">
            <div className="flex items-center hover:cursor-pointer">
              <Image
                src={"/img/loghi/Fisioste_Logo.webp"}
                width="80"
                height="80"
                className="h-auto max-w-full"
                alt="Fisioste Logo"
              />
              <Image
                src={"/img/loghi/Fiosioste_Font.webp"}
                width="200"
                height="47"
                className="h-[47px] w-[200px]"
                alt="Fisioste Logo"
              />
            </div>
          </Link>
          <div className="flex">
            <div className="items-center hidden mr-6 2xl:flex">
              <Image
                src={"/img/loghi/clock1.png"}
                width="50"
                height="50"
                className="h-[50px] w-[50px]"
                alt="Fisioste clock"
              />
              <div className="flex flex-col ml-4">
                <h3 className="text-xl lg:text-[16px] text-secondary font-medium">
                  Orari
                </h3>
                <p className="text-secondary text-[14px] font-light">
                  Lun - Ven 8:00-21:00
                </p>
              </div>
            </div>

            <div className="flex items-center mr-6">
              <Image
                src={"/img/loghi/smartphone1.webp"}
                width="50"
                height="50"
                className="h-[50px] w-[50px]"
                alt="Fisioste smartphone"
              />
              <div className="flex flex-col ml-4">
                <h3 className="text-xl lg:text-[16px] text-secondary font-medium">
                  Cellulare
                </h3>
                <a
                  href="tel:+393288349050"
                  className="text-secondary text-[14px] font-light hover:cursor-pointer hover:underline"
                >
                  +39 3288349050{" "}
                </a>
              </div>
            </div>
            <div className="flex items-center mr-6">
              <FaPhoneAlt className="w-10 h-10 text-secondary" />
              <div className="flex flex-col ml-4">
                <h3 className="text-xl lg:text-[16px] text-secondary font-medium">
                  Numero fisso
                </h3>
                <a
                  href="tel:+390861285075"
                  className="text-secondary text-[14px] font-light hover:cursor-pointer hover:underline"
                >
                  0861 285075{" "}
                </a>
              </div>
            </div>

            <div className="flex items-center ">
              <Image
                src={"/img/loghi/pin1.png"}
                width="50"
                height="50"
                className="h-auto max-w-full"
                alt="Fisioste pin"
              />
              <div className="flex flex-col ml-4">
                <h3 className="text-xl lg:text-[16px] text-secondary font-medium">
                  Vieni a trovarci
                </h3>
                <a
                  className="text-secondary text-[14px] font-light hover:underline"
                  rel="noreferrer"
                  target="_blank"
                  href="https://g.page/Fisioste?share"
                >
                  Viale della Resistenza, 29/a 64100 Teramo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`w-full border-2 border-gray-300 ${stickyClass}`} id="navbar">
          <div className="container items-center justify-between hidden px-8 m-auto md:flex">
            <nav className="py-4">
              {dataNavbar.items.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className={`text-gray-500 hover:cursor-pointer hover:text-secondary mr-8 uppercase ${
                    pathname === item.path ? "font-bold text-secondary" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex justify-end w-1/5 py-4 pl-8 border-l-2 border-gray-300 md:justify-end">
              <a
                href={dataSettings.facebook}
                target="_blank"
                rel="noreferrer"
                className="md:mr-10 lg:mr-20"
              >
                <FaFacebookF
                  size="20px"
                  className="transition hover:cursor-pointer hover:opacity-70 text-secondary"
                />
              </a>

              <a
                href={dataSettings.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram
                  size="20px"
                  className="transition hover:cursor-pointer hover:opacity-70 text-secondary"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
