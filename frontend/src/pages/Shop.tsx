import React from "react";
import { ProductItem } from "@/components/pages/Shop/ProductItem";

import { fetchProducts } from "@/redux/productItems/asyncAction";
import { useAppDispatch } from "@/redux/store";
import { ProductStatus } from "@/redux/productItems/types";
import { useSelector } from "react-redux";
import { productItemsSelector } from "@/redux/productItems/selectors";

export const Shop: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(productItemsSelector);

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
      <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {status === ProductStatus.SUCCESS ? products : <h1>Loading</h1>}
      </div>
    </section>
  );
};
