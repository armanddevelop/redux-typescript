import { CardContent, Typography } from "@mui/material";
import { TpokemonAttributes } from "../../interface/interfaces";

type ContentCardProps = {
  pokemonContent: TpokemonAttributes;
};

export const ContentCard = ({ pokemonContent }: ContentCardProps) => {
  const { abilities, types } = pokemonContent;
  const renderContent = (content: any) => {
    return content.map((content: any, idx: number) => {
      const contentAbility = content && content.ability && content.ability.name;
      const contentType = content && content.type && content.type.name;
      return (
        <Typography key={idx} variant="body2" color="text.secondary">
          {contentAbility !== undefined ? contentAbility : ""}
          {contentType !== undefined ? contentType : ""}
        </Typography>
      );
    });
  };
  return (
    <CardContent>
      <div>
        <Typography variant="h6">Abilitites</Typography>
        {renderContent(abilities)}
      </div>
      <div className="content-card">
        <Typography variant="h6">Type</Typography>
        {renderContent(types)}
      </div>
    </CardContent>
  );
};
