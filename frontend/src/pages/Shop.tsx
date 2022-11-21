import React from "react";
import { ProductItem } from "@/components/pages/Shop/ProductItem";

import { fetchProducts } from "@/redux/productItems/asyncAction";
import { useAppDispatch } from "@/redux/store";
import { ProductStatus } from "@/redux/productItems/types";
import { useSelector } from "react-redux";
import { productItemsSelector } from "@/redux/productItems/selectors";
import { Arrow } from "@/components/ui/svg/Arrow";

export const popupList = [
  { name: "price (DESC)", sortProp: "totalPrice" },
  { name: "price (ASC)", sortProp: "-totalPrice" },
  { name: "alphaBet (DESC)", sortProp: "alphaBet" },
  { name: "alphaBet (ASC)", sortProp: "-alphaBet" },
];
export const categories = ["T-short", "Shorts"];
export const Shop: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(productItemsSelector);
  const [isVisible, setIsVisible] = React.useState(false);

  const getProducts = async () => {
    dispatch(fetchProducts());
  };
  React.useEffect(() => {
    getProducts();
  }, []);
  const products = items.map((obj: any) => (
    <ProductItem key={obj.pk} {...obj} />
  ));

  return (
    <section className="mx-auto max-w-6xl">
      <div className="py-12 max-w-6xl mx-auto">
        <div className="flex justify-around mb-10">
          <ul className="flex items-center justify-center flex-row rounded">
            {categories.map((categoryName, index) => (
              <li
                className="p-2 text-xl font-bold hover:cursor-pointer"
                key={index}
              >
                {categoryName}
              </li>
            ))}
          </ul>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className=" flex items-center"
          >
            <span className="group inline-flex justify-center text-xl font-bold text-gray-700 hover:text-gray-900">
              Sort
            </span>
            <span className="h-full w-5 text-center text-gray-600 pointer-events-none flex items-center justify-center">
              <Arrow />
            </span>
            {isVisible && (
              <div className="absolute top-40 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                <ul>
                  {popupList.map((obj, index) => (
                    <li key={index}>{obj.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
          {status === ProductStatus.SUCCESS ? products : <h1>Loading</h1>}
        </div>
      </div>
    </section>
  );
};
