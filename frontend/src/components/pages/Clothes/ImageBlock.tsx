import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { useState } from "react";

import { albumImageType } from "@/@types/pages/Product";

import { productPropertiesSelector } from "@/redux/productProperties/selectors";

import { returnValidColor, returnValidColors } from "@/utils/hasColor";

type ImageBlockType = {
  albumImages: albumImageType | undefined;
  pk: number;
};
export const ImageBlock: React.FC<ImageBlockType> = ({ albumImages, pk }) => {
  const { propertiesList } = useSelector(productPropertiesSelector);

  const [nav1, setNav1] = useState(0);
  if (!albumImages) {
    return <img alt="eccomerce" src="" />;
  }
  const onClickIndex = (index: number) => {
    setNav1(index);
  };
  return (
    <div className="h-max p-1 md:w-1/2 max-w-md border bg-white rounded shadow-lg">
      <img
        className="object-cover object-center pb-1 h-96 w-max "
        src={returnValidColors(propertiesList, pk, albumImages)[nav1]}
      />
      <Slider
        cssEase={"linear"}
        slidesToShow={2}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {returnValidColors(propertiesList, pk, albumImages).map(
          (obj, index) => (
            <img
              className="w-max h-48 object-cover object-center"
              src={obj}
              key={index}
              onClick={() => onClickIndex(index)}
            />
          )
        )}
      </Slider>
    </div>
  );
};
