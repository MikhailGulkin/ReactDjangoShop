import { addItem } from "@/redux/cart/slice";
import { AppDispatch } from "@/redux/store";

import { ProductTShort } from "@/@types/pages/Product";
import {
  ColorTShortEnum,
  SizeTShortEnum,
} from "@/redux/productProperties/type";

export const onClickAdd = (
  item: ProductTShort | undefined,
  dispatch: AppDispatch,
  color: ColorTShortEnum | undefined,
  size: SizeTShortEnum | undefined
) => {
  function wrapper() {
    if (item)
      dispatch(
        addItem({
          ...item,
          count: 0,
          color: color ? color : ColorTShortEnum.BLACK,
          size: size ? size : SizeTShortEnum.S,
        })
      );
  }
  return wrapper;
};
