import axios from "axios";

export const getDetailsPokemons = async (urlPokemon: string) => {
  try {
    return axios.get(urlPokemon);
  } catch (error) {
    console.error("[getDetailsPokemonError]: ", error);
  }
};

export const getPokemons = async () => {
  try {
    const urlBase: string = "https://pokeapi.co/api/v2/pokemon?limit=151";
    const res = await axios(urlBase);
    return res.data.results;
  } catch (error) {
    console.error("[getPokemonsError]: ", error);
  }
};
