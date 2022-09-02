import { SET_POKEMONS } from "./types";

export const setPokemonsAction = (payload: any) => ({
  type: SET_POKEMONS,
  payload,
});
