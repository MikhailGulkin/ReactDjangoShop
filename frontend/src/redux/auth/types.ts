export const enum LoginEnum {
  LOGIN_LOADING = "LOGIN_LOADING",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAIL = "LOGIN_FAIL",
}

export const enum UserEnum {
  USER_LOADING = "USER_LOADING",
  USER_LOADED_SUCCESS = "USER_LOADED_SUCCESS",
  USER_LOADED_FAIL = "USER_LOADED_FAIL",
}
export type UserType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
};
export interface TokenType {
  access: string;
  refresh: string;
}
export interface AuthStateType extends TokenType {
  isAuthenticated: boolean;

  user: UserType | null;

  loginStatus: LoginEnum;
  userLoadStatus: UserEnum;
}
