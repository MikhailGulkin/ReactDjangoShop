import React from "react";
import { useNavigate } from "react-router";

import { useSelector } from "react-redux";
import { cartSelector } from "@/redux/cart/selectors";

import { ArrowLeft } from "@/components/ui/svg/ArrowLeft";

import style from "./CartItem.module.scss";

export const CartBottomBtn: React.FC = () => {
  const navigate = useNavigate();
  const { items } = useSelector(cartSelector);
  return (
    <div className={`flex items-center justify-between`}>
      <button
        className={`flex justify-center items-center ${style.bottomBtnBack} ${style.bottomBtn}`}
        onClick={() => navigate(-1)}
      >
        <ArrowLeft />
        <span>Вернуться назад</span>
      </button>
      {items.length > 0 && (
        <div
          className={`button pay-btn ${style.bottomBtn} ${style.bottomBtnBuy}`}
        >
          <span>Оплатить сейчас</span>
        </div>
      )}
    </div>
  );
};
