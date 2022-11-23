import { addItem } from "@/redux/cart/slice";
import { AppDispatch } from "@/redux/store";

import {
  ColorHoodieEnum,
  ColorTShirtEnum,
  ProductClothesEnum,
  SizeTShirtEnum,
} from "@/redux/productProperties/type";
import { CartItemType } from "@/redux/cart/type";
import { ProductHoodie, ProductTShirt } from "@/@types/pages/Product";

export const onClickAdd = (
  item: CartItemType | ProductHoodie | ProductTShirt | undefined,
  dispatch: AppDispatch,
  type: ProductClothesEnum,
  color: ColorTShirtEnum | ColorHoodieEnum | undefined,
  size: SizeTShirtEnum | undefined
) => {
  function wrapper() {
    if (item)
      dispatch(
        addItem({
          ...item,
          count: 0,
          type: type,
          color: color ? color : ColorTShirtEnum.BLACK,
          size: size ? size : SizeTShirtEnum.S,
        })
      );
  }

  return wrapper;
};
