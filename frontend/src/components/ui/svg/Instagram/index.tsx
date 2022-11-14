import React from "react";

import { SvgBase } from "@/@types/ui/UiSvg";

import style from "./Instagram.module.scss";

export const Instagram: React.FC<SvgBase> = ({
  stringClass,
  width,
  height,
}) => {
  return (
    <a href="" className={`${stringClass} ${style.root}`}>
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width={width}
        height={height}
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
      </svg>
    </a>
  );
};
