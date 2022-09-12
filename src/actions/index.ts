import {
  SET_POKEMONS,
  SET_LOADING,
  SET_FAVORITE,
  SEARCH_POKEMON,
} from "./types";

export const setPokemonsAction = (payload: any) => ({
  type: SET_POKEMONS,
  payload,
});

export const setLoadingAction = () => ({
  type: SET_LOADING,
});

export const setFavoriteAction = (payload: number) => ({
  type: SET_FAVORITE,
  payload,
});

export const searchPokemonAction = (payload: any) => ({
  type: SEARCH_POKEMON,
  payload,
});
