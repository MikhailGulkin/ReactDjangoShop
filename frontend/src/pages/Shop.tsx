import React from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "@/redux/store";
import { fetchProducts } from "@/redux/productItems/asyncAction";
import { productItemsSelector } from "@/redux/productItems/selectors";
import { ProductStatus } from "@/redux/productItems/types";
import { filterSelector } from "@/redux/filters/selectors";

import { ProductItem } from "@/components/pages/Shop/ProductItem";
import { SortPopup } from "@/components/pages/Shop/SortPopup";
import { Categories } from "@/components/pages/Shop/ProductItem/Categories";

import { ProductHoodie, ProductTShirt } from "@/@types/pages/Product";

export const Shop: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(productItemsSelector);

  const { currentSort, sortChosen, currentCategory } =
    useSelector(filterSelector);

  const getProducts = async () => {
    dispatch(
      fetchProducts({
        currentCategory: currentCategory,
        currentSort: currentSort,
        sortChosen: sortChosen,
      })
    );
  };

  const products = items.map((obj: ProductTShirt | ProductHoodie) => (
    <ProductItem key={obj.pk} {...obj} />
  ));

  React.useEffect(() => {
    getProducts();
  }, [currentSort, currentCategory]);

  return (
    <section className="mx-auto max-w-6xl">
      <div className="py-12 max-w-6xl mx-auto">
        <div className="flex justify-around mb-10">
          <Categories />
          <SortPopup />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
          {status === ProductStatus.SUCCESS ? products : <h1>Loading</h1>}
        </div>
      </div>
    </section>
  );
};
