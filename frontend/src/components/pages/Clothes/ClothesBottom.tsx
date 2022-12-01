import React from "react";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

import { useAppDispatch } from "@/redux/store";
import { productPropFind } from "@/redux/productProperties/selectors";
import { setFavorite } from "@/redux/favoriteItem/slice";
import { favoriteProductSelector } from "@/redux/favoriteItem/selectors";

import { ColorButtons } from "@/components/pages/Clothes/utilsComponents/ColorButtons";
import { SizeOptions } from "@/components/pages/Clothes/utilsComponents/SizeOptions";

import { RedHeart } from "@/components/ui/svg/RedHeart";
import { Heart } from "@/components/ui/svg/Heart";

import { onClickAdd } from "@/utils/addRemoveItem";
import { getUrlName } from "@/utils/getUrlName";

import { ClothesBottomType } from "@/@types/pages/Clothes";

import { ProductClothesEnum } from "@/redux/productProperties/type";

export const ClothesBottom = ({ prop, id }: ClothesBottomType) => {
  const dispatch = useAppDispatch();
  const getClothesType = getUrlName(useLocation());
  const item = useSelector(favoriteProductSelector(getClothesType, prop.pk));
  const propItem = useSelector(productPropFind(id, getClothesType));
  return (
    <>
      <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
        <ColorButtons />
        <SizeOptions />
      </div>
      <div className="flex">
        <span className="title-font font-medium text-2xl text-gray-900">
          ${prop.totalPrice}
        </span>
        <button
          onClick={onClickAdd(
            prop,
            dispatch,
            getClothesType,
            propItem.color,
            propItem.size
          )}
          className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
        >
          Add to cart
        </button>
        <button
          onClick={() =>
            dispatch(
              setFavorite({
                id: prop.pk,
                type: getClothesType as ProductClothesEnum,
              })
            )
          }
          className="rounded-full w-10 h-10  p-0 border border-2 border-black inline-flex
          items-center justify-center text-gray-500 ml-4 "
        >
          {item ? <RedHeart /> : <Heart />}
        </button>
      </div>
    </>
  );
};
