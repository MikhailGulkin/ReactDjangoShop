import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const checkAuthenticated = createAsyncThunk(
  "authUser/checkAuthenticated",
  async (_, thunkAPI) => {
    if (localStorage.getItem("access")) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      const body = JSON.stringify({ token: localStorage.getItem("access") });
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_DOMAIN}/auth/jwt/verify/`,
          body,
          config
        );
        return res.data;
      } catch (e) {
        return thunkAPI.rejectWithValue("Token not valid");
      }
    }
    return thunkAPI.rejectWithValue("User dose not auth");
  }
);
export const loadUser = createAsyncThunk("authUser/loadUser", async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access")}`,
      Accept: "application/json",
    },
  };

  const res = await axios.get(
    `${process.env.REACT_APP_API_DOMAIN}/auth/users/me/`,
    config
  );
  return res.data;
});
export const login = createAsyncThunk<any, { email: string; password: string }>(
  "authUser/login",
  async ({ email, password }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email, password });
    const res = await axios.post(
      `${process.env.REACT_APP_API_DOMAIN}/auth/jwt/create/`,
      body,
      config
    );
    return res.data;
  }
);
export const resetPassword = createAsyncThunk<any, { email: string }>(
  "authUser/resetPassword",
  async ({ email }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email });
    const res = await axios.post(
      `${process.env.REACT_APP_API_DOMAIN}/auth/users/reset_password/`,
      body,
      config
    );
    return res.data;
  }
);
export const resetPasswordConfirm = createAsyncThunk<
  any,
  { uid: string; token: string; new_password: string; re_new_password: string }
>(
  "authUser/resetPassword",
  async ({ uid, token, new_password, re_new_password }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ uid, token, new_password, re_new_password });
    const res = await axios.post(
      `${process.env.REACT_APP_API_DOMAIN}/auth/users/reset_password_confirm/`,
      body,
      config
    );
    return res.data;
  }
);
export const userRegistration = createAsyncThunk<
  any,
  {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    re_password: string;
  }
>(
  "authUser/resetPassword",
  async ({ email, password, re_password, first_name, last_name }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      email,
      password,
      re_password,
      first_name,
      last_name,
    });
    const res = await axios.post(
      `${process.env.REACT_APP_API_DOMAIN}/auth/users/`,
      body,
      config
    );
    return res.data;
  }
);
export const userVerify = createAsyncThunk<any, { uid: string; token: string }>(
  "authUser/resetPassword",
  async ({ uid, token }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ uid, token });
    const res = await axios.post(
      `${process.env.REACT_APP_API_DOMAIN}/auth/users/activation/`,
      body,
      config
    );
    return res.data;
  }
);
