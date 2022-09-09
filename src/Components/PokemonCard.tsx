import { Card, CardHeader, IconButton, CardMedia } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TpokemonAttributes } from "../../interface/interfaces";
import { ContentCard } from "./ContentCard";
import { setFavoriteAction } from "../actions";

type PokemonCardProps = {
  pokemon: TpokemonAttributes;
};
let initialState: boolean = false;

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const [fillFavIcon, setFillFavIcon] = useState<boolean>(initialState);
  const dispatch = useDispatch();

  const handleClickFav = (id: number) => {
    setFillFavIcon(!fillFavIcon);
    dispatch(setFavoriteAction(id));
  };
  return (
    <Card sx={{ minWidth: 300 }}>
      <CardHeader
        action={
          <IconButton
            aria-label="settings"
            onClick={() => handleClickFav(pokemon.id)}
          >
            {fillFavIcon ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
          </IconButton>
        }
        sx={{ textAlign: "center" }}
        title={`${pokemon.name} ${pokemon.id}`}
      />
      <CardMedia
        component="img"
        sx={{ width: "90%" }}
        image={pokemon.sprites.front_default}
      />
      <ContentCard pokemonContent={pokemon} />
    </Card>
  );
};
