import React from "react";
import { Route, Routes } from "react-router-dom";

import { paths } from "./routing/config";
import { Paths } from "@/routing/paths";

import { MainLayout } from "./layouts/MainLayout";

import "./styles/tailwindStyle.scss";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path={paths.main} element={<MainLayout />}>
        {Paths.map((obj, index) => (
          <Route key={index} {...obj} />
        ))}
      </Route>
    </Routes>
  );
};
