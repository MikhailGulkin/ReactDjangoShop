import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="mb-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
