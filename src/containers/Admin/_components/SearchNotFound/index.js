import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { TableRow, TableCell } from "@mui/material";

export default function SearchNotFoundTable({ searchQuery = "", ...other }) {
  return (
    <TableRow {...other} sx={{ height: 300 }}>
      <TableCell colSpan={7}>
        <Typography align="center" variant="h4">
          No Data
        </Typography>
        <Typography variant="body2" align="center">
          No results found for &nbsp;
          <strong>&quot;{searchQuery}&quot;</strong>. Try checking for typos or
          using complete words.
        </Typography>
      </TableCell>
    </TableRow>
  );
}

SearchNotFoundTable.propTypes = {
  searchQuery: PropTypes.string,
};
