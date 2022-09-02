import { TpokemonAttributes } from "../../interface/interfaces";
import { SET_POKEMONS } from "../actions/types";
type state = {
  pokemons: TpokemonAttributes[];
};

const initialState: state = {
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
