import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getDetailsPokemons } from "../api/index";
import { setPokemonsAction } from "../actions";

const filterData = (details: Array<any>) => {
  const res = details.map(({ data }) => data);
  return res;
};

export const usePokemons = () => {
  const { pokemons } = useSelector((state: any) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    const getFullDetailsPokemons = async () => {
      try {
        const pokemons = await getPokemons();
        const pokemonsDetails = await Promise.all(
          pokemons.map(({ url }: any) => getDetailsPokemons(url))
        );
        const data = filterData(pokemonsDetails);
        dispatch(setPokemonsAction(data));
      } catch (error) {
        console.error("[getFullDetailsPokemonsError]: ", error);
      }
    };
    getFullDetailsPokemons();
  }, [dispatch]);

  return { pokemons };
};
