import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { paths } from "@/routing/config";

import { cartSelector } from "@/redux/cart/selectors";

import { Logo } from "@/components/ui/svg/Logo";
import { Cart } from "@/components/ui/svg/Cart";


export const Header: React.FC = () => {
  const { items } = useSelector(cartSelector);
  return (
    <header className="text-gray-600 body-font">
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
          <Link to={paths.shop} className="mr-5 hover:text-gray-900">
            Shop
          </Link>
          <Link to={paths.login} className="mr-5 hover:text-gray-900">
            Login
          </Link>
          <Link to={paths.signup} className="mr-5 hover:text-gray-900">
            Signup
          </Link>
          <Link to={paths.main} className="mr-5 hover:text-gray-900">
            Home
          </Link>
        </nav>
        <Link className="relative" to="/cart">
          <Cart />
          {items.length > 0 && (
            <div className="absolute top-0 right-0 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-10 -translate-y-3">
              {items.reduce((partialSum, obj) => partialSum + obj.count, 0)}
            </div>
          )}
        </Link>
      </div>
    </header>
  );
};
