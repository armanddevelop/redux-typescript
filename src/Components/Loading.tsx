import { CircularProgress } from "@mui/material";

export const Loading = () => {
  return (
    <div className="circular-progress">
      <CircularProgress color="error" thickness={4} size={"5rem"} />
    </div>
  );
};
