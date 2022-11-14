import React, { useState } from "react";
import axios from "axios";

import { ProductTShort } from "@/@types/pages/Product";

import { MainPart } from "@/components/common/MainPart";

export const Main: React.FC = () => {
  const [clothes, setClothes] = useState<ProductTShort[]>([]);
  const getClothes = async () => {
    const { data } = await axios.get(
      "http://localhost:8000/products/all-t_shorts"
    );
    setClothes(data.results);
  };
  React.useEffect(() => {
    getClothes();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 pt-24 flex-col xl:flex-row justify-center items-center">
        <div
          className="lg:flex-grow flex flex-col w-1/2 pb-16
          md:items-start md:text-left md:mb-0 items-center justify-center text-center"
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Before they sold out
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div>
        </div>
        <div className="flex space-x-6 items-center  flex-grow justify-center w-1/2">
          {Object.entries({ 0: 2, 2: 5, 5: 7 }).map((items, index) => (
            <MainPart
              key={index}
              styleList={
                items[1] - parseInt(items[0]) === 3
                  ? ["md:h-44", "", "md:h-44"]
                  : ["", ""]
              }
              clothes={clothes.slice(parseInt(items[0]), items[1])}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
