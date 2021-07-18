import { actionCreators } from "../states";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};
