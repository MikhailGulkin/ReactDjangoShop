import React from "react";

import { ColorButtons } from "@/components/pages/Clothes/utilsComponents/ColorButtons";
import { SizeOptions } from "@/components/pages/Clothes/utilsComponents/SizeOptions";

import { onClickAdd } from "@/utils/addRemoveItem";

import { Heart } from "@/components/ui/svg/Heart";

import { useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";
import { productPropFind } from "@/redux/productProperties/selectors";

import { ClothesBottomType } from "@/@types/pages/Clothes";
import { getUrlName } from "@/utils/getUrlName";
import { useLocation } from "react-router";

export const ClothesBottom: React.FC<ClothesBottomType> = ({ prop, id }) => {
  const dispatch = useAppDispatch();
  const getClothesType = getUrlName(useLocation());

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
        <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
          <Heart />
        </button>
      </div>
    </>
  );
};
