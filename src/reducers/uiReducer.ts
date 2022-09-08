import { loading } from "../../interface/interfaces";
import { SET_LOADING } from "../actions/types";

const initialState: loading = {
  loadingData: true,
};

export const setLoadingReducer = (state = initialState, action: any) => {
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
