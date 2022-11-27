import React, { useState } from "react";

import { useNavigate } from "react-router";
import { paths } from "@/routing/config";

import { useAppDispatch } from "@/redux/store";
import { resetPassword } from "@/redux/auth/asyncActions";

export const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({ email: "" });
  const [requestSend, setRequestSend] = useState(false);

  const { email } = formData;

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(resetPassword({ email }));
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
        <h1 className="text-lg mb-2 mr-4 font-bold">Reset Password Request</h1>
        <form onSubmit={onFormSubmit} className="flex flex-col">
          <div className="mb-5 relative">
            <input
              onChange={onInputChange}
              autoComplete="email"
              name={"email"}
              value={email}
              className="customAuthInput"
              type={"email"}
              placeholder="Input your email"
              minLength={6}
              required
            />
          </div>
          <button className="customAuthBtn" type="submit">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};
