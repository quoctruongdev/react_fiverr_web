import CloseIcon from "@mui/icons-material/Close";
import { ListItem, Stack, ToggleButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import AddService from "../../ServicesManagement/Add/AddService";
import AddUser from "../../UsersManagement/Add/AddUser";
import DetailUser from "../../UsersManagement/Detail/DetailUser";
import EditService from "../../ServicesManagement/Detail/EditService";

export default function DialogAdmin(props) {
  const { open, onClose, dataEdit } = props;
  return (
    <div>
      <Dialog
        key={"13"}
        open={open}
        onClose={onClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle
          sx={{
            paddingY: "5px",
          }}
          id="scroll-dialog-title"
        >
          {/* <Typography> */}
          <Stack alignItems="center" direction="row">
            <ListItem>{dataEdit?.title}</ListItem>
            <ToggleButton
              onClick={onClose}
              sx={{
                p: 0,
                bgcolor: "red",
                ":hover": { bgcolor: "#fff" },
                marginRight: "5px",
                height: "25px",
              }}
              size="small"
            >
              <CloseIcon sx={{ color: "#fff", ":hover": { color: "red" } }} />
            </ToggleButton>
          </Stack>
          {/* </Typography> */}
        </DialogTitle>
        {/* <DialogContent dividers>
          {dataEditUser?.title === "Add User" ? (
            <AdUser />
          ) : (
            <EditUserNew dataEditUser={dataEditUser} />
          )}
        </DialogContent> */}

        <DialogContent dividers>
          {dataEdit?.title === "Add User" && <AddUser />}
          {dataEdit?.title === "Edit User" && (
            <DetailUser dataEdit={dataEdit} />
          )}
          {dataEdit?.title === "Add Service" && <AddService />}
          {dataEdit?.title === "Edit Service" && (
            <EditService dataEdit={dataEdit} />
          )}
        </DialogContent>
        {/* <DialogActions
          sx={{
            px: 4,
            py: 2,
          }}
        >
          <LoadingButton
            type="submit"
            color="secondary"
            loadingPosition="start"
            startIcon={<AddBoxSharpIcon />}
            variant="contained"
          >
            Add User
          </LoadingButton>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
