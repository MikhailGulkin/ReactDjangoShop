import React from "react";

import { useAppDispatch } from "@/redux/store";
import { deleteItem } from "@/redux/cart/slice";

import { Plus } from "@/components/ui/svg/Plus";

import style from "./RemoveItem.module.scss";
import utilsStyle from "../utilsComponents.module.scss";

import { PkColorSizeType } from "@/@types/pages/CartItem";

export const DeleteItem: React.FC<PkColorSizeType> = (prop) => {
  const dispatch = useAppDispatch();
  const onClickDelete = () => {
    dispatch(deleteItem({ ...prop }));
  };
  return (
    <button
      onClick={onClickDelete}
      className={`${style.buttonRemove} ${utilsStyle.buttonCircle}`}
    >
      <Plus />
    </button>
  );
};
