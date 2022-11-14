import React from "react";

import { ProductTShort } from "@/@types/pages/Product";

import { MainItems } from "@/components/pages/Home/MainItems";
import { ItemsSkeleton } from "@/components/pages/Home/MainItems/Skeleton";

type MainPartType = {
  styleList: string[];
  clothes: ProductTShort[];
};
export const MainPart: React.FC<MainPartType> = ({ styleList, clothes }) => {
  const SkeletonArr = [
    styleList.map((obj, index) => (
      <ItemsSkeleton key={index} dividerSize={obj ? 1.5 : 1} />
    )),
  ];
  const MainItemsArr = [
    clothes.map((obj, index) => (
      <MainItems
        key={obj.pk}
        stringClass={styleList[index]}
        props={clothes[index]}
      />
    )),
  ];
  return (
    <div className="flex-shrink-0 gap-y-6 grid grid-cols-1">
      {clothes.length ? MainItemsArr : SkeletonArr}
    </div>
  );
};
