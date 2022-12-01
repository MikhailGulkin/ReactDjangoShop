import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { paths } from "@/routing/config";

import { cartSelector } from "@/redux/cart/selectors";

import { authUserSelector } from "@/redux/auth/selectors";
import { useAppDispatch } from "@/redux/store";
import { logout } from "@/redux/auth/slice";

import { Logo } from "@/components/ui/svg/Logo";
import { Cart } from "@/components/ui/svg/Cart";

import { CalcTotalProduct } from "@/utils/calcTotal";

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const { items } = useSelector(cartSelector);
  const { isAuthenticated } = useSelector(authUserSelector);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const expression = scrollPosition > 0 ? `border-b border-b-blue-100` : "";
  return (
    <header
      className={`text-gray-600 body-font ${expression} w-full  fixed top-0 z-10 bg-gray-50`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to={paths.main}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Logo />
          <span className="ml-3 text-xl">Tailblocks</span>
        </Link>
        <nav
          className="md:ml-auto md:ml-4 md:py-1 md:pl-4
          flex flex-wrap items-center text-base justify-center mr-auto"
        >
          <Link to={paths.main} className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to={paths.shop} className="mr-5 hover:text-gray-900">
            Shop
          </Link>
          {isAuthenticated ? (
            <button
              onClick={() => dispatch(logout())}
              className="mr-5 hover:text-gray-900"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to={paths.login} className="mr-5 hover:text-gray-900">
                Login
              </Link>
              <Link to={paths.signup} className="mr-5 hover:text-gray-900">
                Signup
              </Link>
            </>
          )}
        </nav>
        <Link className="relative" to="/cart">
          <Cart />
          {items.length > 0 && (
            <div className="absolute top-0 right-7 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-10 -translate-y-3">
              <h2>{CalcTotalProduct(items)}</h2>
            </div>
          )}
        </Link>
      </div>
    </header>
  );
};
