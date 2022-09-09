import { TApiPokemonResp } from "../../interface/interfaces";
import { SET_POKEMONS, SET_FAVORITE } from "../actions/types";

const initialState: TApiPokemonResp = {
  pokemons: [],
  favPokemons: [],
};

const setfavorite = (state: any, action: any) => {
  const favorite = state.pokemons.find(({ id }: any) => id === action.payload);
  state.favPokemons.push(favorite);
  return state;
};
const setFavoritePokemons = (state: any, action: any) => {
  if (state.favPokemons.length !== 0) {
    const findPokemon = state.favPokemons.find(
      ({ id }: any) => id === action.payload
    );
    if (findPokemon) {
      const filterPokemons = state.favPokemons.filter(
        ({ id }: any) => id !== action.payload
      );
      return {
        ...state,
        favPokemons: filterPokemons,
      };
    } else {
      return setfavorite(state, action);
    }
  } else {
    return setfavorite(state, action);
  }
};
export const pokemonReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case SET_FAVORITE:
      return setFavoritePokemons(state, action);
    default:
      return state;
  }
};
