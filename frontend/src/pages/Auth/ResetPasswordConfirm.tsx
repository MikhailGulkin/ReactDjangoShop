import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

import { paths } from "@/routing/config";

import { useAppDispatch } from "@/redux/store";
import { resetPasswordConfirm } from "@/redux/auth/asyncActions";

import { EyePasswordOpen } from "@/components/ui/svg/EyePasswordOpen";
import { EyePasswordClose } from "@/components/ui/svg/EyePasswordClose";

import { defineUidToken } from "@/utils/defineUidToken";

export const ResetPasswordConfirm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { uid, token } = useParams();

  const [formData, setFormData] = useState({ password1: "", password2: "" });
  const [requestSend, setRequestSend] = useState(false);

  const [isVisiblePassword1, setVisibilityPassword1] = useState(false);
  const [isVisiblePassword2, setVisibilityPassword2] = useState(false);

  const { password1, password2 } = formData;

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      resetPasswordConfirm({
        ...defineUidToken(uid, token),
        new_password: password1,
        re_new_password: password2,
      })
    );
    setRequestSend(true);
  };

  React.useEffect(() => {
    if (requestSend) {
      navigate(paths.main);
    }
  }, [requestSend]);
  return (
    <div className="container mt-44 mb-20 mx-auto flex justify-center items-center">
      <div className="w-96">
        <h1 className="text-lg mb-2 mr-4 font-bold">Reset Password now!</h1>
        <form onSubmit={onFormSubmit} className="flex flex-col">
          <div className="mb-5 relative">
            <input
              autoComplete="current-password"
              name={"password1"}
              className="customAuthInput"
              type={isVisiblePassword1 ? "text" : "password"}
              value={password1}
              placeholder="Input your password"
              onChange={onInputChange}
              minLength={6}
              required
            />
            {password1 && (
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
              name={"password2"}
              className="customAuthInput"
              type={isVisiblePassword2 ? "text" : "password"}
              value={password2}
              placeholder="Confirm your password"
              onChange={onInputChange}
              minLength={6}
              required
            />
            {password2 && (
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
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};
