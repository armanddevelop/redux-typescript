export type TpokemonAttributes = {
  abilities: Array<arrAbilities>;
  name: string;
  id: number;
  moves: Array<arrMoves>;
  sprites: objSprites;
  weight: number;
  types: Array<pokemonType>;
};
export type pokemonsArray = Array<TpokemonAttributes>;

export type TApiPokemonResp = {
  pokemons: TpokemonAttributes[];
  favPokemons: any[];
};

export type action = {
  payload: Array<any>;
  type: string;
};

export type arrAbilities = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type arrMoves = {
  move: {
    name: string;
    url: string;
  };
};

export type objSprites = {
  front_default: string;
};

export type ui = {
  loadingData: boolean;
};

export type pokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};
