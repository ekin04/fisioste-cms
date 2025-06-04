"use client";
import dataNavbar from "@content/navbar.json";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

function NavBar() {
  const pathname = usePathname();
  return (
    <>
      {dataNavbar.items.map((item) => (
        <Link
          href={item.path}
          className={`text-gray-500 hover:cursor-pointer hover:text-secondary mr-8 uppercase ${
            pathname === item.path ? "font-bold text-secondary" : ""
          }`}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}

export default NavBar;
