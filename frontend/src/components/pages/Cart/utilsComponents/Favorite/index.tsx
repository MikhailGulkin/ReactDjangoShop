import React from "react";
import { Heart } from "@/components/ui/svg/Heart";
import utilsStyle from "../utilsComponents.module.scss";
import style from "./Favorite.module.scss";
export const Favorite: React.FC = () => {
  return (
    <div className={`${utilsStyle.buttonCircle} ${style.buttonHeart}`}>
      <Heart />
    </div>
  );
};
