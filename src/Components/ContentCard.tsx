import { CardContent, Typography } from "@mui/material";
import { arrAbilities } from "../../interface/interfaces";

type ContentCardProps = {
  abilities: Array<arrAbilities>;
};

export const ContentCard = ({ abilities }: ContentCardProps) => {
  return (
    <CardContent>
      <Typography variant="h6">Abilitites</Typography>
      {abilities.map(({ ability }: any, idx: number) => (
        <Typography key={idx} variant="body2" color="text.secondary">
          {ability.name}
        </Typography>
      ))}
    </CardContent>
  );
};
