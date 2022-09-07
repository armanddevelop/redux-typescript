export type TpokemonAttributes = {
  abilities: Array<arrAbilities>;
  name: string;
  number: number;
  moves: Array<arrMoves>;
  sprites: objSprites;
  weight: number;
};
export type pokemonsArray = Array<TpokemonAttributes>;

export type TApiPokemonResp = {
  pokemons: TpokemonAttributes[];
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
