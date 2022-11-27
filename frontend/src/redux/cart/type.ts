import {
  albumImageHoodieType,
  albumImageTShirtType,
  ProductClothesBase,
} from "@/@types/pages/Product";
import {
  ColorHoodieEnum,
  ColorTShirtEnum,
  SizeTShirtEnum,
} from "@/redux/productProperties/type";

export interface CartItemType extends ProductClothesBase {
  count: number;
  size: SizeTShirtEnum;
  albumImages: albumImageTShirtType | albumImageHoodieType;
  color: ColorTShirtEnum | ColorHoodieEnum;
}

export interface CartSliceState {
  totalPrice: number;
  items: CartItemType[];
}
