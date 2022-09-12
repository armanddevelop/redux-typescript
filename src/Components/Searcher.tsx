import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { searchPokemonAction } from "../actions";

export const Searcher = () => {
  const dispatch = useDispatch();
  const handleChange = (value: string) => {
    const valueTranform = value.toLocaleLowerCase();
    dispatch(searchPokemonAction(valueTranform));
  };
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 300,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search favorite pokemon"
        onChange={(e) => handleChange(e.target.value)}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
