import { addItem } from "@/redux/cart/slice";
import { AppDispatch } from "@/redux/store";

import { ProductTShirt } from "@/@types/pages/Product";
import {
  ColorTShirtEnum,
  SizeTShirtEnum,
} from "@/redux/productProperties/type";

export const onClickAdd = (
  item: ProductTShirt | undefined,
  dispatch: AppDispatch,
  color: ColorTShirtEnum | undefined,
  size: SizeTShirtEnum | undefined
) => {
  function wrapper() {
    if (item)
      dispatch(
        addItem({
          ...item,
          count: 0,
          color: color ? color : ColorTShirtEnum.BLACK,
          size: size ? size : SizeTShirtEnum.S,
        })
      );
  }
  return wrapper;
};
