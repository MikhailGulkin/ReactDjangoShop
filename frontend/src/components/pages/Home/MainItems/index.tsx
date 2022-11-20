import React from "react";

import { Link } from "react-router-dom";
import { paths } from "@/routing/config";

import { useSelector } from "react-redux";
import { productPropertiesSelector } from "@/redux/productProperties/selectors";

import { returnValidColor } from "@/utils/hasColor";

import { ProductTShort } from "@/@types/pages/Product";

import style from "./MainItems.module.scss";

type Props = {
  stringClass: String;
  props: ProductTShort;
};
export const MainItems: React.FC<Props> = ({ stringClass, props }) => {
  const { albumImages, pk } = props;
  const { propertiesList } = useSelector(productPropertiesSelector);

  return (
    <Link to={paths.itemsPage(pk)}>
      <div
        className={`w-44 h-64 ${stringClass} ${style.root} rounded-lg overflow-hidden hover:scale-105`}
      >
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src={returnValidColor(propertiesList, pk, albumImages)}
        />
      </div>
    </Link>
  );
};
