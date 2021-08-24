// eslint-disable-next-line no-shadow
export enum AuthActionTypes {
  AUTH_FETCH = 'AUTH_FETCH',
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_ERROR = 'AUTH_ERROR',
  AUTH_LOGOUT = 'AUTH_LOGOUT',
}
export interface AuthState {
  user: null | string;
  email: null | string;
  password: null | string;
  loading: boolean;
  error: null | string;
}
interface AuthFetchAction {
  type: AuthActionTypes.AUTH_FETCH;
}
interface AuthSuccessAction {
  type: AuthActionTypes.AUTH_SUCCESS;
  payload: string;
}
interface AuthErrorAction {
  type: AuthActionTypes.AUTH_ERROR;
  payload: string;
}
interface AuthLogoutAction {
  type: AuthActionTypes.AUTH_LOGOUT;
  payload: string;
}
export type AuthAction = AuthFetchAction | AuthSuccessAction | AuthErrorAction | AuthLogoutAction;
