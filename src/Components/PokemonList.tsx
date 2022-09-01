import { Grid } from "@mui/material";
import { PokemonCard } from "./PokemonCard";
import { pokemonsArray } from "../../interface/interfaces";

type PokemonListProps = {
  pokemons: pokemonsArray;
};

export const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 1, sm: 3, md: 12 }}
    >
      {pokemons.map((item, id) => (
        <Grid item xs={2} sm={4} key={id}>
          <PokemonCard pokemon={item} />
        </Grid>
      ))}
    </Grid>
  );
};
