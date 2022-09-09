import { TApiPokemonResp } from "../../interface/interfaces";
import { SET_POKEMONS, SET_FAVORITE } from "../actions/types";

const initialState: TApiPokemonResp = {
  pokemons: [],
  favPokemons: [],
};

const favorite = (state: any, action: any) => {
  const favorite = state.pokemons.find(({ id }: any) => id === action.payload);
  state.favPokemons.push(favorite);
  localStorage.setItem("favPokemons", JSON.stringify(state.favPokemons));
  return state;
};
const setFavoritePokemon = (state: any, action: any) => {
  if (state.favPokemons.length !== 0) {
    const findPokemon = state.favPokemons.find(
      ({ id }: any) => id === action.payload
    );
    if (findPokemon) {
      const filterPokemons = state.favPokemons.filter(
        ({ id }: any) => id !== action.payload
      );
      localStorage.setItem("favPokemons", JSON.stringify(filterPokemons));
      return {
        ...state,
        favPokemons: filterPokemons,
      };
    } else {
      return favorite(state, action);
    }
  } else {
    return favorite(state, action);
  }
};

export const pokemonReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_POKEMONS:
      let setFavorites: string | [] = "";
      if (localStorage.getItem("favPokemons")) {
        setFavorites = JSON.parse(localStorage.getItem("favPokemons") || "");
        if (setFavorites === "") setFavorites = [];
      } else {
        setFavorites = [];
      }
      return {
        pokemons: action.payload,
        favPokemons: setFavorites,
      };
    case SET_FAVORITE:
      return setFavoritePokemon(state, action);
    default:
      return state;
  }
};
