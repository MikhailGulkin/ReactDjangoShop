import { tokenType, uidType } from "@/@types/config/config";

export const paths = {
  main: "/",
  shop: "/shop",
  cart: "/cart",

  login: "/login",
  signup: "/signup",
  resetPassword: "/reset-password",

  itemsTShirtPage: (id: string | number) => `/clothes/TShirt/${id}`,
  itemsHoodiePage: (id: string | number) => `/clothes/Hoodie/${id}`,
  resetPasswordConfirm: (uid: uidType, token: tokenType) =>
    `/password/reset/confirm/${uid}/${token}`,
  activateUser: (uid: uidType, token: tokenType) => `/activate/${uid}/${token}`,

  any: "*",
};
