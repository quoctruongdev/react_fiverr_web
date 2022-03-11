import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { TableContainer, Table, TableBody, Paper, Stack } from "@mui/material";
import { TableCell, TableHead, TablePagination, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { IconButton, Avatar, Box, Button, Checkbox } from "@mui/material";
import { Typography, Tooltip } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import useModal from "../../../../Hook/ModalHook";
import DialogAdmin from "../../../Admin/_components/ModalAdmin/Dialog";
import { actFetchListUser } from "../../../Admin/UserManagement/_modules/actions";
import { actFetchDeleteUser } from "../../../Admin/UserManagement/DeleteUser/modules/actions";
import { actFetchEditUser } from "../../../Admin/UserManagement/UpdateUser/Edit/_modules/actions";
import { actFetchSearchUser } from "./modules/actions";
import CustomizedSearch from "../../../Admin/_components/Search/SearchMui";
import useWindowSize from "../../../../Hook/useWindowSize";

export default function User() {
  const [keySearch, setkeyName] = useState(null);
  const size = useWindowSize();
  const { open, handleOpen, handleClose } = useModal();
  const [dataEditUser, setDataEditUser] = useState({
    title: "",
    genders: "",
    roles: "",
  });
  const users = useSelector((state) => state.listUserReducer.data);
  const dataSearch = useSelector((state) => state.searchUserReducer.data);

  const dispatch = useDispatch();
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [selectedUserIds, setSelectedUserIds] = useState([]);

  useEffect(() => {
    dispatch(actFetchSearchUser(keySearch));
    dispatch(actFetchListUser());
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
    backgroundColor: selectedUserIds?.length > 0 ? "#C8FACD" : "#b9c4cc",
  };
  ////Search //////

  const handleSearch = useCallback((value) => {
    setkeyName(value);
    setPage(0);
  }, []);

  const handleDataTable = (data) => {
    return data?.slice(page * limit, page * limit + limit)?.map((user) => {
      return (
        <>
          <TableRow
            hover
            key={user?._id}
            selected={selectedUserIds.indexOf(user?._id) !== -1}
          >
            <TableCell padding="checkbox">
              <Checkbox
                checked={selectedUserIds.indexOf(user?._id) !== -1}
                onChange={(event) => handleSelectOne(event, user?._id)}
                value="true"
                color="secondary"
              />
            </TableCell>
            <TableCell>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Avatar src={user?.avatar} sx={{ mr: 2 }}>
                  {user?.name?.slice(0, 1)}
                </Avatar>
                <Typography color="textPrimary" variant="body1">
                  {user?.name}
                </Typography>
              </Box>
            </TableCell>
            <TableCell>{user?.email}</TableCell>
            <TableCell>{user?.phone}</TableCell>
            <TableCell>{user?.role}</TableCell>
            <TableCell>{user?.skill}</TableCell>
            <TableCell>
              <Tooltip title="Edit">
                <IconButton
                  onClick={() => {
                    handleOpen();
                    setDataEditUser({
                      title: "Edit User",
                      genders: user?.gender,
                      roles: user?.role,
                    });
                    dispatch(actFetchEditUser(user?._id));
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
    if (!keySearch) {
      return handleDataTable(users);
    } else if (!dataSearch?.length) {
      return (
        <TableRow sx={{ height: 300 }}>
          <TableCell colSpan={7}>
            <Typography align="center" variant="h4">
              No Data
            </Typography>
          </TableCell>
        </TableRow>
      );
    } else {
      return handleDataTable(dataSearch);
    }
  };

  return (
    <Box sx={{ mx: 5, my: 5 }}>
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
                  <TableCell sx={colorTableCell}>
                    {selectedUserIds?.length ? "" : "Role"}
                  </TableCell>
                  <TableCell sx={colorTableCell}>
                    {selectedUserIds?.length ? "" : "Skill"}
                  </TableCell>
                  <TableCell sx={colorTableCell}>
                    {selectedUserIds?.length > 1 &&
                    selectedUserIds?.length !== users?.length ? (
                      <>
                        <Tooltip title="Delete multiple users">
                          <LoadingButton
                            sx={{ marginLeft: "10px" }}
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
                    ) : null}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{renderTableFinal()}</TableBody>
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
            dataEditUser={dataEditUser}
            open={open}
            onClose={handleClose}
          />
        </Paper>
      </>
    </Box>
  );
}
