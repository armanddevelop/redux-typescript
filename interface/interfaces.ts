export type TpokemonAttributes = {
  name: string;
  url: string;
  number?: number;
};
export type pokemonsArray = Array<TpokemonAttributes>;

export type TApiPokemonResp = {
  pokemons: TpokemonAttributes[];
};

export type action = {
  payload: Array<any>;
  type: string;
};
