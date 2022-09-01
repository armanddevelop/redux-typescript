import {
  Card,
  CardActionArea,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { temporalObjects } from "../../interface/interfaces";
import { useState } from "react";

type PokemonCardProps = {
  pokemon: temporalObjects;
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
      <CardContent>
        <Typography variant="body2">{pokemon.content}</Typography>
      </CardContent>
    </Card>
  );
};
