import React from "react";
import { useSelector } from "react-redux";

import { favoriteProductSelector } from "@/redux/favoriteItem/selectors";
import { setFavorite } from "@/redux/favoriteItem/slice";
import { useAppDispatch } from "@/redux/store";

import utilsStyle from "../utilsComponents.module.scss";
import style from "./Favorite.module.scss";

import { Heart } from "@/components/ui/svg/Heart";
import { RedHeart } from "@/components/ui/svg/RedHeart";
import { favoriteItem } from "@/redux/favoriteItem/types";

export const Favorite: React.FC<favoriteItem> = ({ id, type }) => {
  const item = useSelector(favoriteProductSelector(type, id));
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => dispatch(setFavorite({ id: id, type: type }))}
      className={`${utilsStyle.buttonCircle} ${style.buttonHeart}`}
    >
      {item ? <RedHeart /> : <Heart />}
    </div>
  );
};
