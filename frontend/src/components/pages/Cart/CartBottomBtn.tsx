import React from "react";

import { ArrowLeft } from "@/components/ui/svg/ArrowLeft";

import style from "./CartItem.module.scss";

export const CartBottomBtn: React.FC = () => {
  return (
    <div className={`flex items-center justify-between`}>
      <a
        className={`flex justify-center items-center ${style.bottomBtnBack} ${style.bottomBtn}`}
        href="/"
      >
        <ArrowLeft />
        <span>Вернуться назад</span>
      </a>
      <div
        className={`button pay-btn ${style.bottomBtn} ${style.bottomBtnBuy}`}
      >
        <span>Оплатить сейчас</span>
      </div>
    </div>
  );
};
