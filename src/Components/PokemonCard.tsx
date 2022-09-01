import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import { TpokemonAttributes } from "../../interface/interfaces";

type PokemonCardProps = {
  pokemon: TpokemonAttributes;
};
let initialState: boolean = false;

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const [fillFavIcon, setFillFavIcon] = useState<boolean>(initialState);

  return (
    <Card sx={{ minWidth: 300 }}>
      <CardHeader
        action={
          <IconButton
            aria-label="settings"
            onClick={() => setFillFavIcon(!fillFavIcon)}
          >
            {fillFavIcon ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
          </IconButton>
        }
        title={pokemon.name}
      />
    </Card>
  );
};
