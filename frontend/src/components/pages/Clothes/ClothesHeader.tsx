import React from "react";

import { Facebook } from "@/components/ui/svg/Facebook";
import { Twitter } from "@/components/ui/svg/Twitter";
import { Qiscus } from "@/components/ui/svg/Qiscus";
import { Features } from "@/components/ui/svg/Features";

import { ProductHoodie, ProductTShirt } from "@/@types/pages/Product";

export const ClothesHeader: React.FC<ProductTShirt | ProductHoodie> = ({
  title,
  description,
  features,
}) => {
  const socialSize = { width: 25, height: 25 };

  return (
    <>
      <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
        {title}
      </h1>
      <div className="flex mb-4">
        <span className="flex">
          <Facebook {...socialSize} />
          <Twitter {...socialSize} />
          <Qiscus {...socialSize} />
        </span>
      </div>
      <p className="leading-relaxed">{description}</p>
      <div className="mt-5">
        <h2 className="text-gray-900 text-1xl title-font font-medium mb-1">
          Features
        </h2>
        <ul className="pl-4">
          {features.map((obj, index) => (
            <li key={index} className="pt-2">
              <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <Features />
              </span>
              {obj}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
