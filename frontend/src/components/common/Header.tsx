import React from "react";
import { Link } from "react-router-dom";

import { Logo } from "../ui/svg/Logo";

import { paths } from "@/routing/config";

export const Header: React.FC = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to={paths.main}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Logo />
          <span className="ml-3 text-xl">Tailblocks</span>
        </Link>
        <nav
          className="md:ml-auto md:ml-4 md:py-1 md:pl-4
          flex flex-wrap items-center text-base justify-center"
        >
          <Link to="" className="mr-5 hover:text-gray-900">
            First Link
          </Link>
          <Link to="" className="mr-5 hover:text-gray-900">
            Second Link
          </Link>
          <Link to="" className="mr-5 hover:text-gray-900">
            Third Link
          </Link>
          <Link to="" className="mr-5 hover:text-gray-900">
            Fourth Link
          </Link>
        </nav>
      </div>
    </header>
  );
};
