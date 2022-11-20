import React from "react";
import { Route, Routes } from "react-router-dom";

import { paths } from "./routing/config";

import { MainLayout } from "./layouts/MainLayout";

import { Home } from "@/pages/Home";
import { Shop } from "@/pages/Shop";
import { Clothes } from "@/pages/Clothes";
import { Login } from "@/pages/Login";
import { Signup } from "@/pages/Signup";
import { Cart } from "@/pages/Cart";

import "./styles/tailwindStyle.scss";

function App() {
  return (
    <Routes>
      <Route path={paths.main} element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={paths.shop} element={<Shop />} />
        <Route path={paths.cart} element={<Cart />} />
        <Route path={paths.itemsPage(":productId")} element={<Clothes />} />
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.signup} element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
