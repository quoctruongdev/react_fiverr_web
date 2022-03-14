import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "lodash";
import "./style.css";
import { TableContainer, Table, TableBody, Paper, Stack } from "@mui/material";
import { TableCell, TableHead, TablePagination, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { IconButton, Avatar, Box, Button, Checkbox } from "@mui/material";
import { Typography, Tooltip } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import useModal from "../../../Hook/ModalHook";
import DialogAdmin from "../_components/Dialog/Dialog";
import { actFetchUsersList } from "./_modules/actions";
import { actFetchDeleteUser } from "./Delete/modules/actions";
import { actFetchSearchUser } from "./Search/modules/actions";
import CustomizedSearch from "../../Admin/_components/Search/SearchMui";
import useWindowSize from "../../../Hook/useWindowSize";
import { actFetchDetailUser } from "./Detail/_modules/actions";
import { Skeleton } from "@mui/material";
import Loader from "../../../components/Loader/Loader";
import CircularProgress from "@mui/material/CircularProgress";
import SearchNotFoundTable from "../_components/SearchNotFound";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array?.map((el, index) => [el, index]);
  stabilizedThis?.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (_user) => _user.name?.toLowerCase().indexOf(query?.toLowerCase()) !== -1
    );
  }
  return stabilizedThis?.map((el) => el[0]);
}

export default function UserManagement() {
  const [keySearch, setkeySearch] = useState(null);
  const size = useWindowSize();
  const { open, handleOpen, handleClose } = useModal();
  const [dataEditUser, setDataEditUser] = useState({
    title: "",
    genders: "",
    roles: "",
  });
  const users = useSelector((state) => state.usersListReducer.data);
  const loading = useSelector((state) => state.usersListReducer.loading);
  const dataSearch = useSelector((state) => state.searchUserReducer.data);
  const dataDelete = useSelector((state) => state.deleteUserReducer.data);
  const loadingDelete = useSelector((state) => state.deleteUserReducer.loading);

  const dispatch = useDispatch();
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [selectedUserIds, setSelectedUserIds] = useState([]);

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");

  useEffect(() => {
    dispatch(actFetchUsersList());
  }, [dataDelete]);

  useEffect(() => {
    dispatch(actFetchSearchUser(keySearch));
  }, [keySearch]);

  ////Table//////
  const handleSelectAll = (event) => {
    let newSelectedUserIds;
    if (event.target.checked) {
      newSelectedUserIds = users?.map((user) => user?._id);
    } else {
      newSelectedUserIds = [];
    }
    setSelectedUserIds(newSelectedUserIds);
  };
  const handleSelectOne = (event, id) => {
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
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  const handleLimitChange = (event) => {
    setLimit(event.target.value);
    setPage(0);
  };
  const colorTableCell = {
    backgroundColor: selectedUserIds?.length > 0 ? "#00e676" : "#b9c4cc",
  };

  ////Search //////

  const handleSearch = useCallback((value) => {
    setkeySearch(value);
    setPage(0);
  }, []);

  const filteredUsers = applySortFilter(
    users,
    getComparator(order, orderBy),
    keySearch
  );
  const isUserNotFound = filteredUsers?.length === 0;

  const handleDataTable = (data) => {
    return data?.slice(page * limit, page * limit + limit)?.map((user) => {
      return (
        <>
          <TableRow
            hover
            key={user?._id}
            selected={selectedUserIds.indexOf(user?._id) !== -1}
          >
            <TableCell align="center" padding="checkbox">
              <Checkbox
                checked={selectedUserIds.indexOf(user?._id) !== -1}
                onChange={(event) => handleSelectOne(event, user?._id)}
                value="true"
                color="secondary"
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
            <TableCell>{user?.email}</TableCell>
            <TableCell>{user?.phone}</TableCell>
            <TableCell align="center">{user?.role}</TableCell>
            <TableCell>{user?.skill}</TableCell>
            <TableCell align="center">
              <Tooltip title="Edit">
                <IconButton
                  onClick={() => {
                    handleOpen();
                    setDataEditUser({
                      title: "Edit User",
                      genders: user?.gender,
                      roles: user?.role,
                    });
                    dispatch(actFetchDetailUser(user?._id));
                  }}
                >
                  <Edit color="secondary" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton
                  onClick={() => {
                    dispatch(actFetchDeleteUser(user?._id));
                    setSelectedUserIds([]);
                    alert(`Delete user ${user?.name || null} success`);
                  }}
                >
                  <PersonRemoveIcon color="warning" />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        </>
      );
    });
  };

  const renderTableFinal = () => {
    if (!keySearch?.length === 100) {
      return handleDataTable(users);
    } else if (dataSearch?.length === 0) {
      return (
        <>
          <SearchNotFoundTable searchQuery={keySearch} />
        </>
      );
    } else {
      // return handleDataTable(dataSearch);
      return handleDataTable(filteredUsers);
    }
  };

  if (loading || loadingDelete) return <Loader />;

  return (
    <Box sx={{ mx: 5, mb: 5, mt: 3 }}>
      <Box>
        <Typography variant="h4">User List</Typography>
      </Box>
      <Paper
        elevation={0}
        sx={{
          marginTop: "20px",
          overflow: "auto",
          p: 3,
        }}
      >
        <Stack
          height="40px"
          justifyContent="space-between"
          alignItems="center"
          direction="row"
        >
          <Button
            color="secondary"
            variant="contained"
            onClick={() => {
              handleOpen();
              setDataEditUser({
                title: "Add User",
              });
            }}
          >
            Add User
          </Button>
          <CustomizedSearch
            handleSearch={handleSearch}
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "50%",
              height: 50,
            }}
            placeholder="Search user..."
            variant="outlined"
          />
        </Stack>
      </Paper>
      <>
        <Paper
          sx={{
            marginTop: "24px",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <TableContainer sx={{ maxHeight: 480 }}>
            <Table
              size={size.width < 792 ? "small" : "medium"}
              stickyHeader={true}
              aria-label="sticky table"
              sx={{ whiteSpace: "nowrap" }}
            >
              <TableHead>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={colorTableCell} padding="checkbox">
                    <Checkbox
                      checked={selectedUserIds?.length === users?.length}
                      color="primary"
                      indeterminate={
                        selectedUserIds?.length > 0 &&
                        selectedUserIds?.length < users?.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell sx={colorTableCell}>
                    {selectedUserIds?.length
                      ? selectedUserIds?.length + " User selected"
                      : "Name"}
                  </TableCell>
                  <TableCell sx={colorTableCell}>
                    {selectedUserIds?.length ? "" : "Email"}
                  </TableCell>
                  <TableCell sx={colorTableCell}>
                    {selectedUserIds?.length ? "" : "Phone"}
                  </TableCell>
                  <TableCell align="center" sx={colorTableCell}>
                    {selectedUserIds?.length ? "" : "Role"}
                  </TableCell>
                  <TableCell sx={colorTableCell}>
                    {selectedUserIds?.length ? "" : "Skill"}
                  </TableCell>
                  <TableCell align="center" sx={colorTableCell}>
                    {selectedUserIds?.length > 1 &&
                    selectedUserIds?.length !== users?.length ? (
                      <>
                        <Tooltip title="Delete multiple users">
                          <LoadingButton
                            onClick={(index) => {
                              if (selectedUserIds?.length < 4) {
                                for (
                                  index = 0;
                                  index < selectedUserIds?.length;
                                  index++
                                ) {
                                  const element = selectedUserIds[index];
                                  dispatch(actFetchDeleteUser(element));
                                }
                                setSelectedUserIds(
                                  selectedUserIds.splice(index, 1)
                                );
                                alert("Delete user success");
                              } else {
                                return alert(
                                  "You can only delete up to 3 users at a time. Please choose again"
                                );
                              }
                            }}
                            color="secondary"
                            loadingPosition="start"
                            variant="contained"
                          >
                            <DeleteIcon />
                          </LoadingButton>
                        </Tooltip>
                      </>
                    ) : (
                      "Action"
                    )}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{renderTableFinal()}</TableBody>
              {isUserNotFound && (
                <TableBody>
                  <TableRow>
                    <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                      123123123
                      {/* <SearchNotFound searchQuery={filterName} /> */}
                    </TableCell>
                  </TableRow>
                </TableBody>
              )}
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={keySearch ? dataSearch?.length : users?.length || 0}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[
              5,
              10,
              25,
              50,
              100,
              { label: "All", value: -1 },
            ]}
            SelectProps={{
              sx: { color: "blue" },
            }}
          />
          <DialogAdmin
            dataEdit={dataEditUser}
            open={open}
            onClose={handleClose}
          />
        </Paper>
      </>
    </Box>
  );
}
