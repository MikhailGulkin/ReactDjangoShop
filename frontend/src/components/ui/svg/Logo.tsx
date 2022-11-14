import React from "react";

import { SvgBase } from "@/@types/ui/UiSvg";

export const Logo: React.FC<SvgBase> = ({ width = 40, height = 40 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
  );
};
