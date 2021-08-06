import { Dispatch } from "redux";
import { signIn , signUp } from "./index";


export const signin = (email:string, password:string) => async (dispatch: Dispatch) => {
  try {
    const data = await signIn(email, password);
    dispatch({ type: "AUTH", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const signup = (email:string, password:string) => async (dispatch: Dispatch) => {
  try {
    const data = await signUp(email, password);
    dispatch({ type: "AUTH", payload: data });
  } catch (error) {
    console.log(error);
  }
};
