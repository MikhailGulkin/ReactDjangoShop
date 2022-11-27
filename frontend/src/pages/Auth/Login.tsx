import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { paths } from "@/routing/config";

import { loadUser, login } from "@/redux/auth/asyncActions";
import { useAppDispatch } from "@/redux/store";
import { authUserSelector } from "@/redux/auth/selectors";

import { EyePasswordOpen } from "@/components/ui/svg/EyePasswordOpen";
import { EyePasswordClose } from "@/components/ui/svg/EyePasswordClose";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isAuthenticated } = useSelector(authUserSelector);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isVisiblePassword, setVisibilityPassword] = useState(false);

  const { email, password } = formData;

  const userLogin = async () => {
    await dispatch(login({ ...formData }));
    await dispatch(loadUser());
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    userLogin();
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate(paths.main);
    }
  }, [isAuthenticated]);

  return (
    <div className="container mt-44 mb-20 mx-auto flex justify-center items-center">
      <div className="w-96">
        <h1 className="text-lg mb-2 mr-4 font-bold">Sign In</h1>
        <form onSubmit={onFormSubmit} className="flex flex-col">
          <input
            autoComplete="username"
            name={"email"}
            className="customAuthInput mb-5"
            type="email"
            value={email}
            placeholder="input your email"
            onChange={onInputChange}
            required
          />
          <div className="mb-5 relative">
            <input
              autoComplete="current-password"
              name={"password"}
              className="customAuthInput"
              type={isVisiblePassword ? "text" : "password"}
              value={password}
              placeholder="input your password"
              onChange={onInputChange}
              minLength={6}
              required
            />
            {password && (
              <div
                onClick={() => setVisibilityPassword(!isVisiblePassword)}
                className="absolute top-2 right-2 cursor-pointer"
              >
                {isVisiblePassword ? <EyePasswordOpen /> : <EyePasswordClose />}
              </div>
            )}
          </div>
          <button className="customAuthBtn" type="submit">
            Login
          </button>
        </form>
        <p className="mt-3">
          Don't have an account ?<br />
          <Link
            to={paths.signup}
            className="caret-blue-500 text-blue-600 hover:text-blue-700 focus:text-red-700 transition duration-200 ease-in-out"
          >
            Sign Up
          </Link>
        </p>
        <p className="mt-3">
          Forgot your password ?<br />
          <Link
            to={paths.resetPassword}
            className="caret-blue-500 text-blue-600 hover:text-blue-700 focus:text-red-700 transition duration-200 ease-in-out"
          >
            Rest Password
          </Link>
        </p>
      </div>
    </div>
  );
};
