import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { ProductTShirt } from "@/@types/pages/Product";

import { defineProductIdFunc } from "@/utils/defineProductId";

import { ProductClothesEnum } from "@/redux/productProperties/type";
import { ClothesBlock } from "@/components/common/ClothesBlock";

export const ClothesTShirt: React.FC = () => {
  const { productId } = useParams();
  const defineProductId = defineProductIdFunc(productId);

  const [item, setItem] = useState<ProductTShirt>();

  const getItem = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_DOMAIN}/products/t_shirt/${productId}/`
    );
    setItem({ ...data, type: ProductClothesEnum.TSHIRT });
  };
  React.useEffect(() => {
    getItem();
  }, []);

  return <ClothesBlock item={item} id={defineProductId} />;
};
