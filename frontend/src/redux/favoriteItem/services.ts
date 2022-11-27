import { favoriteItem } from "@/redux/favoriteItem/types";

export const setFavoriteLS = (prop: favoriteItem[]) => {
  const json = JSON.stringify(prop);
  localStorage.setItem("favoriteProducts", json);
};
export const getFavoriteLS = () => {
  const data = localStorage.getItem("favoriteProducts");
  const prop = data ? JSON.parse(data) : [];
  return {
    favoriteItemList: prop as favoriteItem[],
  };
};
