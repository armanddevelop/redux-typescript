import { ui } from "../../interface/interfaces";
import { SET_LOADING } from "../actions/types";

const initialState: ui = {
  loadingData: true,
};

export const uiReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loadingData: !state.loadingData,
      };
    default:
      return state;
  }
};
