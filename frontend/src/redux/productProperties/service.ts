import { PropertiesType } from "@/redux/productProperties/type";

export const setPropertiesLS = (prop: PropertiesType[]) => {
  const json = JSON.stringify(prop);
  localStorage.setItem("productProperties", json);
};
export const getPropertiesLS = () => {
  const data = localStorage.getItem("productProperties");
  const prop = data ? JSON.parse(data) : [];
  return {
    propertiesList: prop as PropertiesType[],
  };
};
