import React from "react";

import style from "./MainItems.module.scss";
import { ProductTShort } from "@/@types/pages/Product";

type Props = {
  stringClass: String;
  props: ProductTShort;
};
export const MainItems: React.FC<Props> = ({ stringClass, props }) => {
  const { clothes_image } = props;
  return (
    <div
      className={`w-44 h-64 ${stringClass} ${style.root} rounded-lg overflow-hidden`}
    >
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src={clothes_image}
      />
    </div>
  );
};
