import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

let initialState: boolean = false;
export const useFavorite = (pokemonId: number = 0) => {
  const { favPokemons } = useSelector((state: any) => state.data);
  const [isFavorite, setIsFavorite] = useState<boolean>(initialState);
  useEffect(() => {
    const findPokemon = favPokemons.find(({ id }: any) => pokemonId === id);
    findPokemon ? setIsFavorite(true) : setIsFavorite(false);
  }, []);
  return { isFavorite, setIsFavorite };
};
