import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { ImageBlock } from "@/components/pages/Clothes/ImageBlock";

import { ProductTShirt } from "@/@types/pages/Product";

import { defineProductIdFunc } from "@/utils/defineProductId";

import { ClothesHeader } from "@/components/pages/Clothes/ClothesHeader";
import { ClothesBottom } from "@/components/pages/Clothes/ClothesBottom";

export const ClothesTShirt: React.FC = () => {
  const { productId } = useParams();
  const defineProductId = defineProductIdFunc(productId);

  const [item, setItem] = useState<ProductTShirt>();

  const getItem = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/products/t_short/${productId}/`
    );
    setItem(data);
  };
  React.useEffect(() => {
    getItem();
  }, []);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <ImageBlock albumImages={item?.albumImages} pk={defineProductId} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {item && <ClothesHeader {...item} />}
            {item && <ClothesBottom prop={item} id={defineProductId} />}
          </div>
        </div>
      </div>
    </section>
  );
};
