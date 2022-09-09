import { useDispatch } from "react-redux";
import { Card, CardHeader, IconButton, CardMedia } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { TpokemonAttributes } from "../../interface/interfaces";
import { ContentCard } from "./ContentCard";
import { setFavoriteAction } from "../actions";
import { useFavorite } from "../hooks/useFavorite";

type PokemonCardProps = {
  pokemon: TpokemonAttributes;
};

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { isFavorite, setIsFavorite } = useFavorite(pokemon.id);
  const dispatch = useDispatch();

  const handleClickFav = (id: number) => {
    setIsFavorite(!isFavorite);
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
            {!isFavorite ? <FavoriteBorderOutlinedIcon /> : <FavoriteIcon />}
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
