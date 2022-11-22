import React from "react";

import { useSelector } from "react-redux";
import { filterSelector } from "@/redux/filters/selectors";
import { useAppDispatch } from "@/redux/store";
import { setSortProperty, setChosen } from "@/redux/filters/slice";
import { SortType } from "@/redux/filters/types";

import { Arrow } from "@/components/ui/svg/Arrow";

import { popupList } from "@/consts/Filter";

export const SortPopup: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentSort, sortChosen } = useSelector(filterSelector);
  const [isVisible, setIsVisible] = React.useState(false);

  const setCurrentSortOnClick = (obj: SortType) => {
    dispatch(setSortProperty(obj));
    dispatch(setChosen(true));
  };
  return (
    <button
      onClick={() => setIsVisible(!isVisible)}
      className=" flex items-center"
    >
      <span className="group inline-flex justify-center text-xl font-bold text-gray-700 hover:text-gray-900">
        {sortChosen ? currentSort.name : "Sort"}
      </span>
      <span className="h-full w-5 text-center text-gray-600 pointer-events-none flex items-center justify-center">
        <Arrow />
      </span>
      {isVisible && (
        <div className="absolute top-40 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ul>
            {popupList.map((obj, index) => (
              <li
                onClick={() => setCurrentSortOnClick(obj)}
                className="hover:bg-amber-50"
                key={index}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </button>
  );
};
