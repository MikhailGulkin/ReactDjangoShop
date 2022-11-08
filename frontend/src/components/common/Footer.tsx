import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../../routing/config";

import { Logo } from "../ui/svg/Logo";
import { Facebook } from "../ui/svg/Facebook";
import { Twitter } from "../ui/svg/Twitter";
import { Instagram } from "../ui/svg/Instagram";
import { LinkedIn } from "../ui/svg/LinkedIn";

export const Footer: React.FC = () => {
  const svgConsts = {
    stringClass: "ml-3",
    width: 30,
    height: 30,
  };
  return (
    <footer className="text-gray-600 body-font">
      <div className="bg-gray-100">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            to={paths.main}
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <Logo />
            <span className="ml-3 text-xl">Tailblocks</span>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2020 Tailblocks —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @knyttneve
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Facebook {...svgConsts} />
            <Twitter {...svgConsts} />
            <Instagram {...svgConsts} />
            <LinkedIn {...svgConsts} />
          </span>
        </div>
      </div>
    </footer>
  );
};
