import React from "react";

import { useSelector } from "react-redux";
import { cartItemSelector } from "@/redux/cart/selectors";
import { useAppDispatch } from "@/redux/store";
import { removeItem } from "@/redux/cart/slice";

import { Minus } from "@/components/ui/svg/Minus";
import { Plus } from "@/components/ui/svg/Plus";

import utilsStyle from "../utilsComponents.module.scss";
import style from "./AddRemove.module.scss";

import { onClickAdd } from "@/utils/addRemoveItem";

import { PkColorSizeType } from "@/@types/pages/CartItem";

export const AddRemoveItem: React.FC<PkColorSizeType> = ({
  pk,
  size,
  color,
}) => {
  const item = useSelector(cartItemSelector(pk, color, size));
  const dispatch = useAppDispatch();
  const onClickRemove = () => {
    dispatch(removeItem({ pk: pk, color: color, size: size }));
  };
  return (
    <div className={`px-6 py-4 flex justify-between items-center`}>
      <button
        disabled={item?.count === 1}
        onClick={onClickRemove}
        className={`${utilsStyle.buttonCircle} ${style.buttonPlusMinus} disabled:pointer-events-none`}
      >
        <Minus />
      </button>
      <b className={`px-2 ${style.fontSize}`}>{item?.count}</b>
      <button
        onClick={onClickAdd(item, dispatch, color, size)}
        className={`${utilsStyle.buttonCircle} ${style.buttonPlusMinus}`}
      >
        <Plus />
      </button>
    </div>
  );
};
