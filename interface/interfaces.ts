export type TpokemonAttributes = {
  name: string;
  url: string;
};
export type pokemonsArray = Array<TpokemonAttributes>;

export type TApiPokemonResp = {
  pokemons: TpokemonAttributes[];
};
