import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../api/index";
import { setPokemonsAction } from "../actions";

export const usePokemons = () => {
  const { pokemons } = useSelector((state: any) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    getPokemons()
      .then((res) => {
        dispatch(setPokemonsAction(res));
      })
      .catch((err) => console.error("[usePokemonsError]: ", err));
  }, [dispatch]);

  return { pokemons };
};
