import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { paths } from "@/routing/config";

import { productPropertiesSelector } from "@/redux/productProperties/selectors";
import { ProductClothesEnum } from "@/redux/productProperties/type";

import { returnValidColor } from "@/utils/hasColor";

import style from "./MainItems.module.scss";

import { PropsType } from "@/@types/common/Home";

export const MainItems: React.FC<PropsType> = ({ stringClass, props }) => {
  const { albumImages, pk } = props;
  const { propertiesList } = useSelector(productPropertiesSelector);

  return (
    <Link to={paths.itemsTShirtPage(pk)}>
      <div
        className={`w-44 h-64 ${stringClass} ${style.root} rounded-lg overflow-hidden hover:scale-105`}
      >
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src={returnValidColor(
            propertiesList,
            pk,
            ProductClothesEnum.TSHIRT,
            albumImages
          )}
        />
      </div>
    </Link>
  );
};
