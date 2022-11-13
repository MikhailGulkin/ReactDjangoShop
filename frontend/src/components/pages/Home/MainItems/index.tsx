import React from "react";

import style from "./MainItems.module.scss";
import { ProductTShort } from "@/@types/pages/Product";
import { Link } from "react-router-dom";
import { paths } from "@/routing/config";

type Props = {
  stringClass: String;
  props: ProductTShort;
};
export const MainItems: React.FC<Props> = ({ stringClass, props }) => {
  const { album_images, pk } = props;
  return (
    <Link to={paths.itemsPage(pk)}>
      <div
        className={`w-44 h-64 ${stringClass} ${style.root} rounded-lg overflow-hidden hover:scale-105`}
      >
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src={album_images.black[0]}
        />
      </div>
    </Link>
  );
};
