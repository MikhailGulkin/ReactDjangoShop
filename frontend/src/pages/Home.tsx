import React from "react";
import { Header } from "../components/common/Header";
import { Main } from "../components/pages/Home/Main";
import { Footer } from "../components/common/Footer";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
