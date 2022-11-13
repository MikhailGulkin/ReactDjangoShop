import React from "react";
import { Route, Routes } from "react-router-dom";

import { paths } from "./routing/config";

import "./styles/tailwindStyle.scss";

import { MainLayout } from "./layouts/MainLayout";

import { Home } from "@/pages/Home";
import { Shop } from "@/pages/Shop";
import { Clothes } from "@/pages/Clothes";
import { Login } from "@/pages/Login";
import { Signup } from "@/pages/Signup";

function App() {
  return (
    <Routes>
      <Route path={paths.main} element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={paths.shop} element={<Shop />} />
        <Route path={paths.itemsPage(":productId")} element={<Clothes />} />
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.signup} element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
