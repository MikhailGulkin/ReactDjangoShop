import React from "react";
import { useSelector } from "react-redux";

import { filterSelector } from "@/redux/filters/selectors";
import { useAppDispatch } from "@/redux/store";
import { setCategory } from "@/redux/filters/slice";
import { CategoriesEnum } from "@/redux/filters/types";

import { categories } from "@/consts/Filter";

export const Categories: React.FC = () => {
  const { currentCategory } = useSelector(filterSelector);
  const dispatch = useAppDispatch();
  const setCategoryOnClick = (obj: CategoriesEnum) => {
    dispatch(setCategory(obj));
  };
  return (
    <ul className="flex items-center justify-center flex-row rounded">
      {categories.map((categoryName, index) => (
        <li
          className={`p-2 text-xl font-bold hover:cursor-pointer ${
            currentCategory === categoryName
              ? "border-b border-b-amber-300"
              : ""
          }`}
          onClick={() => setCategoryOnClick(categoryName)}
          key={index}
        >
          {categoryName}
        </li>
      ))}
    </ul>
  );
};
