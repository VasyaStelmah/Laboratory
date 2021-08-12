import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
// Хук для типизации useSelector

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;