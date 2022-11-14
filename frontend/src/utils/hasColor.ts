import { PropertiesType } from "@/redux/productProperties/type";

export const hasColor = (colorList: PropertiesType[], productId: number) => {
  return colorList.find((obj) => obj.id === productId);
};
