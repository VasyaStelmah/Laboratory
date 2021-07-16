import { signIn } from "./index";
import { signUp } from "./index";

export const signin = (email, password) => async (dispatch) => {
  try {
    const data = await signIn(email, password);
    dispatch({ type: "AUTH", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const signup = (email, password) => async (dispatch) => {
  try {
    const data = await signUp(email, password);
    dispatch({ type: "AUTH", payload: data });
  } catch (error) {
    console.log(error);
  }
};
