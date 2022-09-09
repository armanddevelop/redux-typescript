import {
  applyMiddleware,
  legacy_createStore as createStore,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
//import { loggerActions } from "../middlewares";
import { pokemonReducer, uiReducer } from "../reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (typeof window !== "undefined" &&
    window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]) ||
  compose;

const reducers = combineReducers({
  data: pokemonReducer,
  ui: uiReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
