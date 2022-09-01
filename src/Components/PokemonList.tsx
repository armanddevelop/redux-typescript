import { Grid } from "@mui/material";
import { PokemonCard } from "./PokemonCard";
import { temporalItems } from "../../interface/interfaces";

type PokemonListProps = {
  temporalArray: temporalItems;
};

export const PokemonList = ({ temporalArray }: PokemonListProps) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 1, sm: 3, md: 12 }}
    >
      {temporalArray.map((item, id) => (
        <Grid item xs={2} sm={4} key={id}>
          <PokemonCard pokemon={item} />
        </Grid>
      ))}
    </Grid>
  );
};
