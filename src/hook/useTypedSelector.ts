import { rootReducer } from "../states/reducers";
import { useSelector, TypedUseSelectorHook } from "react-redux";
export const useTypedSelector: TypedUseSelectorHook<typeof rootReducer> =
  useSelector;
