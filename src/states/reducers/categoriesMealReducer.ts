import { Action } from "../actions";
import { ActionType } from "../action-types";
interface typeState {
  loading: boolean;
  categories: {}[] | null;
  error: string | null;
}
const initialValue = {
  loading: false,
  categories: null,
  error: null,
};

export const categoriesMealReducer = (
  state: typeState = initialValue,
  action: Action
): typeState => {
  switch (action.type) {
    case ActionType.GET_CATEGORIES_REQUEST:
      return { ...state, loading: true, categories: null, error: null };
    case ActionType.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
        error: null,
      };
    case ActionType.GET_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        categories: null,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};
