import React from "react";

import { paths } from "@/routing/config";

import { Home } from "@/pages/Home";
import { Shop } from "@/pages/Shop";
import { Cart } from "@/pages/Cart";
import { ClothesTShirt } from "@/pages/ClothesTShirt";
import { ClothesHoodie } from "@/pages/ClothesHoodie";

import { Login } from "@/pages/Auth/Login";
import { Signup } from "@/pages/Auth/Signup";
import { ActivateUser } from "@/pages/Auth/ActivateUser";
import { ResetPasswordConfirm } from "@/pages/Auth/ResetPasswordConfirm";
import { ResetPassword } from "@/pages/Auth/ResetPassword";

import { tokenType, uidType } from "@/@types/config/config";

export const Paths = [
  { index: true, element: <Home /> },
  { path: paths.shop, element: <Shop /> },
  { path: paths.cart, element: <Cart /> },
  { path: paths.itemsTShirtPage(":productId"), element: <ClothesTShirt /> },
  { path: paths.itemsHoodiePage(":productId"), element: <ClothesHoodie /> },
  { path: paths.login, element: <Login /> },
  { path: paths.signup, element: <Signup /> },
  {
    path: paths.activateUser(
      ":uid" as unknown as uidType,
      ":token" as unknown as tokenType
    ),
    element: <ActivateUser />,
  },
  { path: paths.resetPassword, element: <ResetPassword /> },
  {
    path: paths.resetPasswordConfirm(
      ":uid" as unknown as uidType,
      ":token" as unknown as tokenType
    ),
    element: <ResetPasswordConfirm />,
  },
];
