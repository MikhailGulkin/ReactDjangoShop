import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkAuthenticated, loadUser, login } from "@/redux/auth/asyncActions";
import {
  AuthStateType,
  LoginEnum,
  TokenType,
  UserEnum,
  UserType,
} from "@/redux/auth/types";

const initialState: AuthStateType = {
  access: localStorage.getItem("access") as string,
  refresh: localStorage.getItem("refresh") as string,
  isAuthenticated: false,

  user: null,

  loginStatus: LoginEnum.LOGIN_LOADING,
  userLoadStatus: UserEnum.USER_LOADING,
};

const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");

      state.loginStatus = LoginEnum.LOGIN_FAIL;
      state.access = "";
      state.refresh = "";
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loginStatus = LoginEnum.LOGIN_LOADING;
    });
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<TokenType>) => {
        localStorage.setItem("access", action.payload.access);
        localStorage.setItem("refresh", action.payload.refresh);

        state.access = action.payload.access;
        state.isAuthenticated = true;
        state.refresh = action.payload.refresh;
        state.loginStatus = LoginEnum.LOGIN_SUCCESS;
      }
    );
    builder.addCase(login.rejected, (state) => {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");

      state.loginStatus = LoginEnum.LOGIN_FAIL;
      state.access = "";
      state.refresh = "";
      state.isAuthenticated = false;
    });

    builder.addCase(loadUser.pending, (state) => {
      state.userLoadStatus = UserEnum.USER_LOADING;
    });
    builder.addCase(
      loadUser.fulfilled,
      (state, action: PayloadAction<UserType>) => {
        state.userLoadStatus = UserEnum.USER_LOADED_SUCCESS;
        state.user = action.payload;
      }
    );
    builder.addCase(loadUser.rejected, (state) => {
      state.userLoadStatus = UserEnum.USER_LOADED_FAIL;
      state.user = null;
    });

    builder.addCase(checkAuthenticated.fulfilled, (state) => {
      state.isAuthenticated = true;
    });
    builder.addCase(checkAuthenticated.rejected, (state) => {
      state.isAuthenticated = false;
    });
  },
});
export const { logout } = authUserSlice.actions;
export default authUserSlice.reducer;
