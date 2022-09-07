import {
  applyMiddleware,
  legacy_createStore as createStore,
  combineReducers,
  compose,
} from "redux";
//import thunk from "redux-thunk";
import { addIdxToPokemon } from "../middlewares";
import { pokemonReducer } from "../reducers/pokemonsReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (typeof window !== "undefined" &&
    window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]) ||
  compose;

const reducers = combineReducers({ data: pokemonReducer });

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(addIdxToPokemon))
);
