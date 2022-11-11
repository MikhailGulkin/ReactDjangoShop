import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
