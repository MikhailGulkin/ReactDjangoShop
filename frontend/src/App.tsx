import React from "react";
import { Route, Routes } from "react-router-dom";

import { paths } from "./routing/config";

import { MainLayout } from "./layouts/MainLayout";

import { Home } from "@/pages/Home";
import { Shop } from "@/pages/Shop";
import { ClothesTShirt } from "@/pages/ClothesTShirt";
import { Login } from "@/pages/Login";
import { Signup } from "@/pages/Signup";
import { Cart } from "@/pages/Cart";

import "./styles/tailwindStyle.scss";
import { ClothesHoodie } from "@/pages/ClothesHoodie";

function App() {
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
        <Route path={paths.signup} element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
