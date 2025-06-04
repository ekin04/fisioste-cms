import React from "react";
import Link from "next/link";
import dataNavbar from "@content/navbar.json";

interface FooterMenuProps {}

export const FooterMenu: React.FC<FooterMenuProps> = ({}) => {
  return (
    <div className="hidden lg:flex lg:flex-col lg:items-center sm:border-r border-secondary">
      <h2 className="text-[35px] text-secondary font-normal mb-2">Menu</h2>
      <div className="flex flex-col text-center">
        {dataNavbar.items.map((item, index) => (
          <Link href={item.path} key={index}>
            <span className="text-primary text-center font-normal hover:cursor-pointer hover:text-secondary text-base uppercase">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
