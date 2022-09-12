import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useFavorite = (pokemonId: number = 0) => {
  let initialState: boolean = false;
  const { favPokemons } = useSelector((state: any) => state.data);
  const [isFavorite, setIsFavorite] = useState<boolean>(initialState);
  useEffect(() => {
    const findPokemon = favPokemons.find(({ id }: any) => pokemonId === id);
    findPokemon ? setIsFavorite(true) : setIsFavorite(false);
  }, [pokemonId]);
  return { isFavorite, setIsFavorite };
};
