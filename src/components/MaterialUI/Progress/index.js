import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import * as React from "react";

export default function CircularColor({ ...props }) {
  return (
    <Stack
      sx={{ color: "grey.500" }}
      spacing={2}
      justifyContent="center"
      direction="row"
    >
      <CircularProgress {...props} />
    </Stack>
  );
}
