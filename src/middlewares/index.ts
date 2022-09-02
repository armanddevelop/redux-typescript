import { action } from "../../interface/interfaces";

export const loggerActions =
  (store: any) => (next: any) => (action: action) => {
    console.log("esto vale store ", store);
    console.log("esto vale action ", action);
    next(action);
  };

export const featuring =
  (store: any) => (next: any) => (actionInfo: action) => {
    const featured = [
      { name: "coustom-pokemon", url: "" },
      ...actionInfo.payload,
    ];
    const updateActionInfo = { ...actionInfo, payload: featured };
    next(updateActionInfo);
  };

export const addIdxToPokemon =
  (store: any) => (next: any) => (action: action) => {
    const pokemonsWithNumber = action.payload.map((pokemon, idx) => {
      pokemon.number = idx + 1;
      return pokemon;
    });
    const updateActionInfo = { ...action, payload: pokemonsWithNumber };
    next(updateActionInfo);
  };
