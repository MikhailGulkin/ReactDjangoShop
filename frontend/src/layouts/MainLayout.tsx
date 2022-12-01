import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

import { useAppDispatch } from "@/redux/store";
import { checkAuthenticated, loadUser } from "@/redux/auth/asyncActions";
import { authUserSelector } from "@/redux/auth/selectors";

export const MainLayout: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useSelector(authUserSelector);
  const checkLoadUser = async () => {
    await dispatch(checkAuthenticated());
    if (isAuthenticated) {
      await dispatch(loadUser());
    }
  };
  React.useEffect(() => {
    checkLoadUser();
  }, [isAuthenticated]);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="mb-auto mt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
