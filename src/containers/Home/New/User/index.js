import { useEffect, useState } from "react";
import "./style.css";
import { TableContainer, Tooltip, Table, TableBody } from "@mui/material";
import { TableCell, TableHead, TablePagination, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { IconButton, Avatar, Box, Card, Checkbox } from "@mui/material";
import { Typography } from "@mui/material";
import { actFetchListUser } from "../../../Admin/UserManagement/_modules/actions";
import { actFetchDeleteUser } from "../../../Admin/UserManagement/DeleteUser/modules/actions";
import { useDispatch, useSelector } from "react-redux";
import { Edit } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import useModal from "../../../Hook/ModalHook";
import { Button } from "@mui/material";
import DialogAdmin from "../../../Admin/_components/ModalAdmin/Dialog";
import { actFetchEditUser } from "../../../Admin/UserManagement/UpdateUser/Edit/_modules/actions";

export default function User() {
  const { open, handleOpen, handleClose } = useModal();
  const [title, setTitle] = useState();
  const [dataGender, setDatagender] = useState();
  const users = useSelector((state) => state.listUserReducer.data);
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [selectedUserIds, setSelectedUserIds] = useState([]);

  useEffect(() => {
    dispatch(actFetchListUser());
  }, []);

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
    console.log(newPage);
  };
  const handleLimitChange = (event) => {
    setLimit(event.target.value);
    setPage(0);
  };

  const colorTableCell = {
    backgroundColor: selectedUserIds?.length > 0 ? "#C8FACD" : "#b9c4cc",
  };
  return (
    <>
      <Typography>
        <Button
          onClick={() => {
            handleOpen();
            setTitle("Add User");
          }}
        >
          Add User
        </Button>
      </Typography>
      <Card>
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table stickyHeader={true} aria-label="sticky table">
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

            <TableBody>
              {users?.slice(page * limit, page * limit + limit).map((user) => (
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
                          setTitle("Edit User");
                          setDatagender(user?.gender);
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
                          alert(`Delete user ${user?.name || null} success`);
                        }}
                      >
                        <PersonRemoveIcon color="warning" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={users?.length || 0}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page || 0}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 50]}
        />
        <DialogAdmin
          dataGender={dataGender}
          title={title}
          open={open}
          onClose={handleClose}
        />
      </Card>
    </>
  );
}
