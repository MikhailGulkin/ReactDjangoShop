import React from "react";

import { Minus } from "@/components/ui/svg/Minus";
import { Plus } from "@/components/ui/svg/Plus";

import utilsStyle from "../utilsComponents.module.scss";
import style from "./AddRemove.module.scss";

export const AddRemoveItem: React.FC = () => {
  return (
    <div className={`px-6 py-4 flex justify-between items-center`}>
      <button className={`${utilsStyle.buttonCircle} ${style.buttonPlusMinus}`}>
        <Minus />
      </button>
      <b className={`px-2 ${style.fontSize}`}>1</b>
      <button className={`${utilsStyle.buttonCircle} ${style.buttonPlusMinus}`}>
        <Plus />
      </button>
    </div>
  );
};
