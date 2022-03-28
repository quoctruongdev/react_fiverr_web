import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { TableRow, TableCell } from "@mui/material";
import { Empty } from "antd";

export default function SearchTableNotFound({
  searchQuery = "",
  colSpan,
  ...other
}) {
  return (
    <TableRow {...other} sx={{ height: 300 }}>
      <TableCell colSpan={colSpan}>
        <Typography align="center" variant="h4">
          <Empty description={false} />
        </Typography>
        <Typography variant="body1" align="center">
          No results found for &nbsp;
          <strong>&quot;{searchQuery}&quot;</strong>. Try checking for typos or
          using complete words.
        </Typography>
      </TableCell>
    </TableRow>
  );
}

SearchTableNotFound.propTypes = {
  searchQuery: PropTypes.string,
};
