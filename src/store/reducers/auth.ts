import { AuthActionTypes, AuthAction, AuthState } from '../../types/auth';

const initialState: AuthState = {
  user: null,
  email: null,
  password: null,
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.AUTH_FETCH:
      return { ...state, loading: true };
    case AuthActionTypes.AUTH_SUCCESS:
      localStorage.setItem('profile', JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    case AuthActionTypes.AUTH_ERROR:
      return { ...state, error: action.payload };
    case AuthActionTypes.AUTH_LOGOUT:
      localStorage.removeItem('profile');
      return { ...state };
    default:
      return state;
  }
};
