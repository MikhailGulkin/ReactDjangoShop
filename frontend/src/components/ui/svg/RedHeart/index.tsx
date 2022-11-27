import React from "react";
import style from "./RedHeart.module.scss";

export const RedHeart: React.FC = () => {
  return (
    <div className={style.root}>
      <svg
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className={`w-5 h-5 `}
        viewBox="0 0 24 24"
      >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
      </svg>
    </div>
  );
};
