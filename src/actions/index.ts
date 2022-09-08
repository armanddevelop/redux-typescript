import { SET_POKEMONS, SET_LOADING } from "./types";

export const setPokemonsAction = (payload: any) => ({
  type: SET_POKEMONS,
  payload,
});

export const setLoadingAction = () => ({
  type: SET_LOADING,
});
