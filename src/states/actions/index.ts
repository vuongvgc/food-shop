import { ActionType } from "../action-types";
interface getCategoriesRequest {
  type: ActionType.GET_CATEGORIES_REQUEST;
}
interface getCategoriesSuccess {
  type: ActionType.GET_CATEGORIES_SUCCESS;
  payload: {}[];
}
interface getCategoriesFail {
  type: ActionType.GET_CATEGORIES_FAIL;
  payload: string;
}
export type Action =
  | getCategoriesRequest
  | getCategoriesSuccess
  | getCategoriesFail;
