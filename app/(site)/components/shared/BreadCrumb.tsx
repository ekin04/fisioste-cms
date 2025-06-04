import React from "react";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineSlash } from "react-icons/hi2";
interface BreadCrumbProps {
    folderUrl: string;
    folderName: string;
    pageTitle: string
}

export default function BreadCrumb({ folderUrl, folderName,pageTitle }: BreadCrumbProps) {
  return (
    <ol className="flex items-center whitespace-nowrap pb-6">
      <li className="inline-flex items-center">
        <Link
          className="text-lg flex items-center  hover:text-secondary focus:outline-hidden"
          href="/"
        >
          <IoHomeOutline className="mr-2" />Home <HiOutlineSlash />
        </Link>
      
      </li>
      <li className="inline-flex items-center">
        <Link
          className="text-lg flex items-center  hover:text-secondary focus:outline-hidden"
          href={folderUrl}
        >
          {folderName} <HiOutlineSlash />
          
        </Link>
      </li>
      <li
        className="text-lg flex items-center  text-secondary focus:outline-hidden"
        aria-current="page"
      >
         {pageTitle}
      </li>
    </ol>
  );
}
