import React from "react";
import { SvgBase } from "@/@types/ui/UiSvg";
import style from "./LinkedIn.module.scss";

export const LinkedIn: React.FC<SvgBase> = ({ stringClass, width, height }) => {
  return (
    <a href="" className={`${stringClass}  ${style.root}`}>
      <svg
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0"
        viewBox="0 0 24 24"
        width={width}
        height={height}
      >
        <path
          stroke="none"
          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
        ></path>
        <circle cx="4" cy="4" r="2" stroke="none"></circle>
      </svg>
    </a>
  );
};
