import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Facebook } from "@/components/ui/svg/Facebook";
import { Twitter } from "@/components/ui/svg/Twitter";
import { Qiscus } from "@/components/ui/svg/Qiscus";
import { Heart } from "@/components/ui/svg/Heart";

import { ProductTShort } from "@/@types/pages/Product";
import { Arrow } from "@/components/ui/svg/Arrow";
import { Features } from "@/components/ui/svg/Features";
import { useAppDispatch } from "@/redux/store";
import { addItem } from "@/redux/cart/slice";
import { ColorButton } from "@/components/pages/Clothes/ColorButton";

export const Clothes: React.FC = () => {
  const dispatch = useAppDispatch();

  const { productId } = useParams();
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
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={item?.album_images.black[0]}
          />
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
              <div className="flex">
                <span className="mr-3">Color</span>
                {["bg-black", "bg-blue-600", "bg-green-500"].map(
                  (obj, index) => (
                    <ColorButton key={index} stringClass={obj} />
                  )
                )}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <Arrow />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${item?.total_price}
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
