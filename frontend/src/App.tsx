import React from "react";
import { Route, Routes } from "react-router-dom";

import { paths } from "./routing/config";

import { MainLayout } from "./layouts/MainLayout";

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

import "./styles/tailwindStyle.scss";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path={paths.main} element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={paths.shop} element={<Shop />} />
        <Route path={paths.cart} element={<Cart />} />
        <Route
          path={paths.itemsTShirtPage(":productId")}
          element={<ClothesTShirt />}
        />
        <Route
          path={paths.itemsHoodiePage(":productId")}
          element={<ClothesHoodie />}
        />
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.signup} element={<Signup />} />{" "}
        <Route
          path={paths.activateUser(
            ":uid" as unknown as uidType,
            ":token" as unknown as tokenType
          )}
          element={<ActivateUser />}
        />
        <Route path={paths.resetPassword} element={<ResetPassword />} />
        <Route
          path={paths.resetPasswordConfirm(
            ":uid" as unknown as uidType,
            ":token" as unknown as tokenType
          )}
          element={<ResetPasswordConfirm />}
        />
      </Route>
    </Routes>
  );
};
