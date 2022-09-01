import axios from "axios";

export const getPokemons = async () => {
  try {
    const urlBase: string = "https://pokeapi.co/api/v2/pokemon?limit=151";
    const res = await axios(urlBase);
    console.log("esto vale res ", res.data.results);
    return res.data.results;
  } catch (error) {
    console.error("[getPokemonsError]: ", error);
  }
};
