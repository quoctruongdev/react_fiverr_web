import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actShowModalPopup } from "../../../components/ModalPopup/module/actions";
import CustomizedSearch from "../../Admin/_components/Search/SearchMui";
import AddUser from "./Add/AddUser";
import { actFetchSearchUser } from "./Search/modules/actions";
import "./style.css";
import TableUser from "./_component/TableUser";

export default function UserManagement() {
  const [keySearch, setkeySearch] = useState("");
  const dispatch = useDispatch();

  // User List
  const users = useSelector((state) => state.searchUserReducer.data);
  const loading = useSelector((state) => state.searchUserReducer.loading);
  // Message
  const dataDelete = useSelector((state) => state.deleteUserReducer.data);
  // Update
  const dataUpdate = useSelector((state) => state.updateUserReducer.data);
  //Add user
  const dataAdd = useSelector((state) => state.addUserReducer.data);

  useEffect(() => {
    dispatch(actFetchSearchUser(keySearch, 0));
  }, [keySearch, dataDelete, dataUpdate, dataAdd]);

  const handleSearch = useCallback((value) => {
    setkeySearch(value);
  }, []);

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
              dispatch(
                actShowModalPopup({
                  Component: <AddUser />,
                  open: true,
                  title: "Add User",
                  action: "Create User",
                })
              );
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
      <Paper
        sx={{
          marginTop: "24px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <TableUser users={users} loading={loading} keySearch={keySearch} />
      </Paper>
    </Box>
  );
}
