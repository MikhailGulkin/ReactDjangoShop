import React from "react";
import {SvgBase} from "@/@types/ui/UiSvg";
import style from './Qiscus.module.scss'

export const Qiscus: React.FC<SvgBase> = ({stringClass, width, height}) => {
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
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
      </svg>
    </a>
  );
};

