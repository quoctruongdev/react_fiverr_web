import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Checkbox,
  IconButton,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Tooltip,
  Typography,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CircularColor from "../../../../../components/MaterialUI/Progress";
import { actSetMessage } from "../../../../../components/Notification/module/actions";
import { actPopoverGlobal } from "../../../../../components/Popover/module/actions";
import ListAction from "../../../_components/listAction/index";
import SearchNotFoundTable from "../../../_components/SearchTableNotFound";
import * as funcTable from "../../../_components/TableFunction/index";
import { actFetchDeleteService } from "../../Delete/modules/actions";

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "rating",
    numeric: false,
    disablePadding: false,
    label: "Rating",
  },
  {
    id: "price",
    numeric: false,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "image",
    numeric: false,
    disablePadding: false,
    label: "Image",
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
    setSelectedServiceIds,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const dispatch = useDispatch();

  const deleteMultiUser = () => {
    return itemSelected?.map((item) => {
      return dispatch(actFetchDeleteService(item));
    });
  };

  const action = (
    <>
      <Button
        onClick={() => {
          if (itemSelected.length < 6) {
            deleteMultiUser();
            setSelectedServiceIds([]);
          } else {
            dispatch(
              actSetMessage(
                "You only delete up to 5 services at a time. Please choose again",
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
              colSpan={4}
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
              <Tooltip title="Delete multiple services">
                <IconButton
                  onClick={() => {
                    dispatch(
                      actSetMessage(
                        `Are you sure delete ${itemSelected?.length} service ?`,
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
  rowCount: PropTypes.number,
};

export default function TableServices({ services, loading, keySearch }) {
  const dispatch = useDispatch();
  const [selectedServiceIds, setSelectedServiceIds] = useState([]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  useEffect(() => {
    // if (services?.length === 0) {
    //   setPage(0);
    // }
  }, [keySearch]);

  const handleSelectAllClick = (event) => {
    let newSelectedUserIds;
    if (event.target.checked) {
      newSelectedUserIds = services?.map((service) => service?._id);
    } else {
      newSelectedUserIds = [];
    }
    setSelectedServiceIds(newSelectedUserIds);
    if (services?.length === 0) {
      setSelectedServiceIds(services);
    }
  };

  const handleClick = (event, id) => {
    event.preventDefault();
    const selectedIndex = selectedServiceIds.indexOf(id);
    let newSelectedUserIds = [];
    if (selectedIndex === -1) {
      newSelectedUserIds = newSelectedUserIds.concat(selectedServiceIds, id);
    } else if (selectedIndex === 0) {
      newSelectedUserIds = newSelectedUserIds.concat(
        selectedServiceIds.slice(1)
      );
    } else if (selectedIndex === selectedServiceIds.length - 1) {
      newSelectedUserIds = newSelectedUserIds.concat(
        selectedServiceIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedUserIds = newSelectedUserIds.concat(
        selectedServiceIds.slice(0, selectedIndex),
        selectedServiceIds.slice(selectedIndex + 1)
      );
    }
    setSelectedServiceIds(newSelectedUserIds);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const isSelected = (_id) => selectedServiceIds.indexOf(_id) !== -1;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - services?.length) : 0;

  return (
    <Box position="relative" sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table
            sx={{ whiteSpace: "nowrap", minWidth: 750 }}
            stickyHeader
            aria-label="sticky table"
            aria-labelledby="sticky table"
          >
            <EnhancedTableHead
              setSelectedServiceIds={setSelectedServiceIds}
              itemSelected={selectedServiceIds}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={services?.length}
            />
            <TableBody>
              {funcTable
                .tableSort(services, funcTable.getComparator(order, orderBy))
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((service, index) => {
                  const isItemSelected = isSelected(service?._id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={service?._id}
                      selected={isItemSelected}
                    >
                      <TableCell
                        onClick={(event) => handleClick(event, service._id)}
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
                      <TableCell sx={{ py: 0 }} width="40%">
                        {service?.name}
                      </TableCell>
                      <TableCell sx={{ py: 0 }}>{service?.rating}</TableCell>
                      <TableCell sx={{ py: 0 }}>{service?.price}</TableCell>
                      <TableCell sx={{ p: 0 }} width="15%" align="left">
                        <Card sx={{ width: 100 }}>
                          <CardActionArea>
                            {!service?.image || loading ? (
                              <Skeleton
                                variant="rectangular"
                                animation={"pulse"}
                                width={100}
                                height={66}
                              />
                            ) : (
                              <CardMedia
                                component="img"
                                height="140"
                                image={service?.image}
                                alt={service?.name}
                              />
                            )}

                            {/* {service?.image ? (
                              <CardMedia
                                component="img"
                                height="140"
                                image={service?.image}
                                alt={service?.name}
                              />
                            ) : (
                              <Skeleton
                                variant="rectangular"
                                animation={"pulse"}
                                width={100}
                                height={66}
                              />
                            )} */}
                          </CardActionArea>
                        </Card>
                      </TableCell>
                      <TableCell sx={{ py: 0 }} width="10%" align="left">
                        <Tooltip title="More action">
                          <IconButton
                            onClick={(event) => {
                              const anchorEl = event.currentTarget;
                              dispatch(
                                actPopoverGlobal(
                                  <ListAction
                                    setSelectedIds={setSelectedServiceIds}
                                    serviceItem={service}
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
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={7} />
                </TableRow>
              )}
            </TableBody>
            <TableBody>
              {services?.length === 0 && (
                <SearchNotFoundTable colSpan={7} searchQuery={keySearch} />
              )}
              {loading && (
                <TableRow sx={{ height: 300 }}>
                  <TableCell colSpan={7}>
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
        <TablePagination
          sx={{
            border: "1px solid #e4e5e7",
            bgcolor: "#e4e5e7",
          }}
          rowsPerPageOptions={[5, 10, 25, 50, 100, { label: "All", value: -1 }]}
          component="div"
          count={services?.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
