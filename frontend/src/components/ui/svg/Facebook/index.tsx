import React from "react";

// import { SvgBase } from "@/@types/ui/UiSvgTypes";
import { SvgBase } from "@/@types/ui/UiSvgTypes";
import style from "./Facebook.module.scss";

export const Facebook: React.FC<SvgBase> = ({ width, height }) => {
  return (
    <a href="" className={`cursor-pointer ${style.root}`}>
      <svg
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width={width}
        height={height}
      >
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
      </svg>
    </a>
  );
};
