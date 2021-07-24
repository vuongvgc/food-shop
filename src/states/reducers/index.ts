import { combineReducers } from "redux";
import { categoriesMealReducer } from "./categoriesMealReducer";
export const rootReducer = combineReducers({
  categoriesMeal: categoriesMealReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
