import { legacy_createStore as createStore, combineReducers } from "redux";
//import thunk from "redux-thunk";
import { pokemonReducer } from "../reducers/pokemonsReducer";

const reducers = combineReducers({ data: pokemonReducer });

export const store = createStore(reducers);
