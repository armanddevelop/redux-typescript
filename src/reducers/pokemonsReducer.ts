import { TApiPokemonResp } from "../../interface/interfaces";
import { SET_POKEMONS } from "../actions/types";

const initialState: TApiPokemonResp = {
  pokemons: [],
};

export const pokemonReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

    default:
      return state;
  }
};
