import React from 'react';
import {ImageBlock} from "@/components/pages/Clothes/ImageBlock";
import {ClothesHeader} from "@/components/pages/Clothes/ClothesHeader";
import {ClothesBottom} from "@/components/pages/Clothes/ClothesBottom";
import {ProductHoodie, ProductTShirt} from "@/@types/pages/Product";

type ClothesBlockType = {
    item: ProductTShirt | ProductHoodie | undefined,
    id: number
}

export const ClothesBlock:React.FC<ClothesBlockType> = ({item, id}) => {
 return (
      <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <ImageBlock albumImages={item?.albumImages} pk={id} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {item && <ClothesHeader {...item} />}
            {item && <ClothesBottom prop={item} id={id} />}
          </div>
        </div>
      </div>
    </section>
 );
};

