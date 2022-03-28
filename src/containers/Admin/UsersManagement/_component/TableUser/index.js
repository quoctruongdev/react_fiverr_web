import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar, Button, Stack, IconButton } from "@mui/material";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { Switch, Paper } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer } from "@mui/material";
import { TablePagination, TableHead, TableRow } from "@mui/material";
import { Tooltip, TableSortLabel, Typography } from "@mui/material";
import CircularColor from "../../../../../components/MaterialUI/Progress";
import { actSetMessage } from "../../../../../components/Notification/module/actions";
import { actPopoverGlobal } from "../../../../../components/Popover/module/actions";
import useWindowSize from "../../../../../Hook/useWindowSize";
import SearchNotFoundTable from "../../../_components/SearchTableNotFound";
import { actFetchDeleteUser } from "../../Delete/modules/actions.js";
import ListAction from "../../../_components/listAction/index";
import { visuallyHidden } from "@mui/utils";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function tableSort(array, comparator) {
  const stabilizedThis = array?.map((el, index) => [el, index]);
  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis?.map((el) => el[0]);
}
function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "email",
    numeric: false,
    disablePadding: false,
    label: "Email",
  },
  {
    id: "phone",
    numeric: false,
    disablePadding: false,
    label: "Phone",
  },
  {
    id: "role",
    numeric: false,
    disablePadding: false,
    label: "Role",
  },
  {
    id: "skill",
    numeric: false,
    disablePadding: false,
    label: "Skill",
  },
  {
    id: "certification",
    numeric: false,
    disablePadding: false,
    label: "Certification",
  },
  {
    id: "Action",
    numeric: false,
    disablePadding: false,
    label: "Action",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    itemSelected,
    rowCount,
    setSelectedUserIds,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const dispatch = useDispatch();

  const deleteMultiUser = () => {
    return itemSelected?.map((item) => {
      return dispatch(actFetchDeleteUser(item));
    });
  };

  const action = (
    <>
      <Button
        onClick={() => {
          if (itemSelected.length < 6) {
            deleteMultiUser();
            setSelectedUserIds([]);
          } else {
            dispatch(
              actSetMessage(
                "You only delete up to 5 users at a time. Please choose again",
                "warning"
              )
            );
          }
        }}
        sx={{ color: "#ffee33" }}
        size="small"
      >
        Sure
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="error"
        onClick={() => {
          dispatch(actSetMessage());
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const renderHeadTable = () => {
    if (itemSelected?.length === 0 || rowCount === 0) {
      return headCells.map((headCell) => {
        return (
          <TableCell
            sx={{ bgcolor: "#637381" }}
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        );
      });
    }
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell
          sx={{
            ...(itemSelected?.length > 0 && rowCount > 0
              ? {
                  bgcolor: "#00e676",
                }
              : { bgcolor: "#637381" }),
          }}
          padding="checkbox"
        >
          <Checkbox
            color="secondary"
            indeterminate={
              itemSelected?.length > 0 && itemSelected?.length < rowCount
            }
            checked={rowCount > 0 && itemSelected?.length === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {itemSelected?.length > 0 && rowCount > 0 && (
          <>
            <TableCell
              colSpan={6}
              sx={{
                py: 1,
                ...(itemSelected?.length > 0 && {
                  bgcolor: "#00e676",
                }),
              }}
            >
              <Typography
                sx={{ flex: "1 1 100%" }}
                color="inherit"
                variant="subtitle1"
                component="div"
              >
                {itemSelected?.length} selected
              </Typography>
            </TableCell>
            <TableCell
              colSpan={1}
              align="left"
              sx={{
                py: 1,
                ...(itemSelected?.length > 0 && {
                  bgcolor: "#00e676",
                }),
              }}
            >
              <Tooltip title="Delete multiple users">
                <IconButton
                  onClick={() => {
                    dispatch(
                      actSetMessage(
                        `Are you sure delete ${itemSelected?.length} user ?`,
                        "info",
                        action
                      )
                    );
                  }}
                  disableRipple
                >
                  <DeleteIcon color="secondary" />
                </IconButton>
              </Tooltip>
            </TableCell>
          </>
        )}
        {renderHeadTable()}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  itemSelected: PropTypes.any.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function TableUser({ users, loading, keySearch }) {
  const dispatch = useDispatch();
  const size = useWindowSize();
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {});
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const handleSelectAllClick = (event) => {
    let newSelectedUserIds;
    if (event.target.checked) {
      newSelectedUserIds = users?.map((user) => user?._id);
    } else {
      newSelectedUserIds = [];
    }
    setSelectedUserIds(newSelectedUserIds);
    if (users?.length === 0) {
      setSelectedUserIds(users);
    }
  };

  const handleClick = (event, id) => {
    event.preventDefault();
    const selectedIndex = selectedUserIds.indexOf(id);
    let newSelectedUserIds = [];

    if (selectedIndex === -1) {
      newSelectedUserIds = newSelectedUserIds.concat(selectedUserIds, id);
    } else if (selectedIndex === 0) {
      newSelectedUserIds = newSelectedUserIds.concat(selectedUserIds.slice(1));
    } else if (selectedIndex === selectedUserIds.length - 1) {
      newSelectedUserIds = newSelectedUserIds.concat(
        selectedUserIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedUserIds = newSelectedUserIds.concat(
        selectedUserIds.slice(0, selectedIndex),
        selectedUserIds.slice(selectedIndex + 1)
      );
    }

    setSelectedUserIds(newSelectedUserIds);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (_id) => selectedUserIds.indexOf(_id) !== -1;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users?.length) : 0;

  return (
    <Box position="relative" sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table
            size={size.width < 792 || dense ? "small" : "medium"}
            sx={{ whiteSpace: "nowrap", minWidth: 750 }}
            stickyHeader
            aria-label="sticky table"
            aria-labelledby="sticky table"
          >
            <EnhancedTableHead
              setSelectedUserIds={setSelectedUserIds}
              itemSelected={selectedUserIds}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={users?.length}
            />
            <TableBody>
              {tableSort(users, getComparator(order, orderBy))
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((user, index) => {
                  const isItemSelected = isSelected(user?._id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={user?._id}
                      selected={isItemSelected}
                    >
                      <TableCell
                        onClick={(event) => handleClick(event, user._id)}
                        padding="checkbox"
                      >
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Box
                          sx={{
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          <Avatar
                            src={user?.avatar}
                            sx={{ mr: 2, textTransform: "uppercase" }}
                          >
                            {user?.name?.slice(0, 1)}
                          </Avatar>
                          <Typography color="textPrimary" variant="body1">
                            {user?.name}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.phone}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{user.skill}</TableCell>
                      <TableCell>{user.certification}</TableCell>
                      <TableCell align="left">
                        <Tooltip title="More action">
                          <IconButton
                            onClick={(event) => {
                              const anchorEl = event.currentTarget;
                              dispatch(
                                actPopoverGlobal(
                                  <ListAction
                                    setSelectedIds={setSelectedUserIds}
                                    userItem={user}
                                  />,
                                  anchorEl
                                )
                              );
                            }}
                          >
                            <MoreVertIcon color="warning" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={8} />
                </TableRow>
              )}
            </TableBody>
            <TableBody>
              {users?.length === 0 && (
                <SearchNotFoundTable colSpan={8} searchQuery={keySearch} />
              )}
              {loading && (
                <TableRow sx={{ height: 300 }}>
                  <TableCell colSpan={8}>
                    <CircularColor
                      color="secondary"
                      disableShrink
                      thickness={8}
                      size={70}
                    />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack
          borderTop="1px solid #e9e3e361"
          alignItems="center"
          justifyContent="space-between"
          direction="row-reverse"
        >
          <TablePagination
            rowsPerPageOptions={[
              5,
              10,
              25,
              50,
              100,
              { label: "All", value: -1 },
            ]}
            component="div"
            count={users?.length || 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <FormControlLabel
            sx={{
              ml: 1,
              mb: 0,
            }}
            control={
              <Switch
                color="secondary"
                checked={dense}
                onChange={handleChangeDense}
              />
            }
            label="Dense padding"
          />
        </Stack>
      </Paper>
    </Box>
  );
}
