import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const getCategoriesMeal = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_CATEGORIES_REQUEST,
    });
    try {
      const { data } = await axios({
        method: "GET",
        url: "https://www.themealdb.com/api/json/v1/1/categories.php",
      });
      dispatch({
        type: ActionType.GET_CATEGORIES_SUCCESS,
        payload: data.categories,
      });
    } catch (err) {
      dispatch({
        type: ActionType.GET_CATEGORIES_FAIL,
        payload: err,
      });
    }
  };
};
