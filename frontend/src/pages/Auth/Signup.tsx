import React, { useState } from "react";
import { useNavigate } from "react-router";

import { paths } from "@/routing/config";

import { useAppDispatch } from "@/redux/store";
import { userRegistration } from "@/redux/auth/asyncActions";

import { EyePasswordOpen } from "@/components/ui/svg/EyePasswordOpen";
import { EyePasswordClose } from "@/components/ui/svg/EyePasswordClose";

export const Signup: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isFormSubmit, setFormSubmit] = useState(false);

  const [isVisiblePassword1, setVisibilityPassword1] = useState(false);
  const [isVisiblePassword2, setVisibilityPassword2] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    re_password: "",
  });
  const { email, first_name, last_name, password, re_password } = formData;

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      userRegistration({ email, first_name, last_name, password, re_password })
    );
    setFormSubmit(true);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  React.useEffect(() => {
    if (isFormSubmit) {
      navigate(paths.main);
    }
  }, [isFormSubmit]);
  return (
    <div className="container mt-44 mb-20 mx-auto flex justify-center items-center">
      <div className="w-96">
        <h1 className="text-lg mb-2 mr-4 font-bold">Sign up</h1>
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
          <input
            autoComplete="first_name"
            name={"first_name"}
            className="customAuthInput mb-5"
            type="text"
            value={first_name}
            placeholder="input your name"
            onChange={onInputChange}
            required
          />
          <input
            autoComplete="last_name"
            name={"last_name"}
            className="customAuthInput mb-5"
            type="last_name"
            value={last_name}
            placeholder="input your second name"
            onChange={onInputChange}
            required
          />
          <div className="mb-5 relative">
            <input
              autoComplete="current-password"
              name={"password"}
              className="customAuthInput"
              type={isVisiblePassword1 ? "text" : "password"}
              value={password}
              placeholder="input your password"
              onChange={onInputChange}
              minLength={6}
              required
            />
            {password && (
              <div
                onClick={() => setVisibilityPassword1(!isVisiblePassword1)}
                className="absolute top-2 right-2 cursor-pointer"
              >
                {isVisiblePassword1 ? (
                  <EyePasswordOpen />
                ) : (
                  <EyePasswordClose />
                )}
              </div>
            )}
          </div>
          <div className="mb-5 relative">
            <input
              autoComplete="current-password"
              name={"re_password"}
              className="customAuthInput"
              type={isVisiblePassword2 ? "text" : "password"}
              value={re_password}
              placeholder="Confirm your password"
              onChange={onInputChange}
              minLength={6}
              required
            />
            {re_password && (
              <div
                onClick={() => setVisibilityPassword2(!isVisiblePassword2)}
                className="absolute top-2 right-2 cursor-pointer"
              >
                {isVisiblePassword2 ? (
                  <EyePasswordOpen />
                ) : (
                  <EyePasswordClose />
                )}
              </div>
            )}
          </div>
          <button className="customAuthBtn" type="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};
