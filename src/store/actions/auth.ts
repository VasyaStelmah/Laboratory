import { Dispatch } from 'redux';
import { AuthActionTypes, AuthAction } from '../../types/auth';

export const signin = (email: string, password: string) => async (dispatch: Dispatch<AuthAction>) => {
  try {
    dispatch({ type: AuthActionTypes.AUTH_FETCH });
    const response = await fetch('http://localhost:5000/user/signin', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    dispatch({ type: AuthActionTypes.AUTH_SUCCESS, payload: JSON.stringify(json) });
  } catch (error) {
    dispatch({ type: AuthActionTypes.AUTH_ERROR, payload: error });
  }
};
export const signup = (email: string, password: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: AuthActionTypes.AUTH_FETCH });
    const response = await fetch('http://localhost:5000/user/signin', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    dispatch({ type: AuthActionTypes.AUTH_SUCCESS, payload: JSON.stringify(json) });
  } catch (error) {
    dispatch({ type: AuthActionTypes.AUTH_ERROR, payload: error });
  }
};
