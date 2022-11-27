import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

import { paths } from "@/routing/config";

import { useAppDispatch } from "@/redux/store";
import { userVerify } from "@/redux/auth/asyncActions";

import { defineUidToken } from "@/utils/defineUidToken";

export const ActivateUser: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { uid, token } = useParams();

  const [isFormSubmit, setFormSubmit] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(userVerify({ ...defineUidToken(uid, token) }));
    setFormSubmit(true);
  };

  React.useEffect(() => {
    if (isFormSubmit) {
      navigate(paths.main);
    }
  }, [isFormSubmit]);

  return (
    <div className="container mt-44 mb-20 mx-auto flex justify-center items-center">
      <div className="w-96">
        <h1 className="text-lg mb-2 mr-4 font-bold">Activate your account</h1>
        <form onSubmit={onSubmit} className="flex flex-col">
          <button className="customAuthBtn" type="submit">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};
