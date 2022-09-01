import { getPokemons } from "../api/index";
import { useState, useEffect } from "react";
import { TApiPokemonResp } from "../../interface/interfaces";

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState<TApiPokemonResp>({ data: [] });
  useEffect(() => {
    getPokemons()
      .then((res) => {
        setPokemons({
          data: res,
        });
      })
      .catch((err) => console.error("[usePokemonsError]: ", err));
  }, []);

  return { pokemons };
};
