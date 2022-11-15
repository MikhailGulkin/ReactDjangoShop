import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Facebook } from "@/components/ui/svg/Facebook";
import { Twitter } from "@/components/ui/svg/Twitter";
import { Qiscus } from "@/components/ui/svg/Qiscus";
import { Heart } from "@/components/ui/svg/Heart";
import { Features } from "@/components/ui/svg/Features";

import { SizeOptions } from "@/components/pages/Clothes/SizeOptions";
import { ColorButtons } from "@/components/pages/Clothes/ColorButtons";

import { ProductTShort } from "@/@types/pages/Product";
import { useAppDispatch } from "@/redux/store";
import { addItem } from "@/redux/cart/slice";
import {ImageBlock} from "@/components/pages/Clothes/ImageBlock";
import {defineProductIdFunc} from "@/utils/defineProductId";

export const Clothes: React.FC = () => {
  const dispatch = useAppDispatch();

  const { productId } = useParams();
  const defineProductId = defineProductIdFunc(productId)
  const [item, setItem] = useState<ProductTShort>();
  const getItem = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/products/t_short/${productId}/`
    );
    setItem(data);
  };
  React.useEffect(() => {
    getItem();
  }, []);
  const socialSize = { width: 25, height: 25 };
  const onClickAdd = () => {
    if (item) dispatch(addItem({ ...item, count: 0 }));
  };
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <ImageBlock albumImages={item?.albumImages} pk={defineProductId}/>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {item?.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex">
                <Facebook {...socialSize} />
                <Twitter {...socialSize} />
                <Qiscus {...socialSize} />
              </span>
            </div>
            <p className="leading-relaxed">{item?.description}</p>
            <div className="mt-5">
              <h2 className="text-gray-900 text-1xl title-font font-medium mb-1">
                Features
              </h2>
              <ul className="pl-4">
                {item?.features.map((obj, index) => (
                  <li key={index} className="pt-2">
                    <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <Features />
                    </span>
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <ColorButtons />
              <SizeOptions />
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${item?.totalPrice}
              </span>
              <button
                onClick={onClickAdd}
                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Add to cart
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <Heart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
