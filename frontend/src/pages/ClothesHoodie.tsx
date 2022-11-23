import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { ImageBlock } from "@/components/pages/Clothes/ImageBlock";

import { ProductHoodie } from "@/@types/pages/Product";

import { defineProductIdFunc } from "@/utils/defineProductId";

import { ClothesHeader } from "@/components/pages/Clothes/ClothesHeader";
import { ClothesBottom } from "@/components/pages/Clothes/ClothesBottom";
import { ProductClothesEnum } from "@/redux/productProperties/type";
import { ClothesBlock } from "@/components/common/ClothesBlock";

export const ClothesHoodie: React.FC = () => {
  const { productId } = useParams();
  const defineProductId = defineProductIdFunc(productId);

  const [item, setItem] = useState<ProductHoodie>();

  const getItem = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/products/hoodie/${productId}/`
    );
    setItem({ ...data, type: ProductClothesEnum.HOODIE });
  };
  React.useEffect(() => {
    getItem();
  }, []);

  return <ClothesBlock item={item} id={defineProductId} />;
};
