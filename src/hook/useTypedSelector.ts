import { RootState } from "../states";
import { useSelector, TypedUseSelectorHook } from "react-redux";
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
