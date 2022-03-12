import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import LoadingButton from "@mui/lab/LoadingButton";
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import CloseIcon from "@mui/icons-material/Close";
import { ListItem, Stack, ToggleButton } from "@mui/material";
import { useCallback, useRef } from "react";
import { forwardRef } from "react";
import AdUser from "./AdUser";
import EditUserNew from "./EditUser";

export default function DialogAdmin(props) {
  const { open, onClose, dataEditUser } = props;
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
            <ListItem>{dataEditUser?.title}</ListItem>
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
          {dataEditUser?.title === "Add User" && <AdUser />}
          {dataEditUser?.title === "Edit User" && (
            <EditUserNew dataEditUser={dataEditUser} />
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
