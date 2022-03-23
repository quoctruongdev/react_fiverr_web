import CloseIcon from "@mui/icons-material/Close";
import { ListItem, Stack, ToggleButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { DialogActions } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import { actShowModalPopup } from "./module/actions";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function ModalPopup(props) {
  const data = useSelector((state) => state.modalReducer.data);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(actShowModalPopup({ open: false, title: null }));
  };

  return (
    <div>
      <Dialog
        open={data?.open }
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        {data?.title && (
          <DialogTitle
            sx={{
              paddingY: "5px",
            }}
            id="scroll-dialog-title"
          >
            {/* <Typography> */}
            <Stack alignItems="center" direction="row">
              <ListItem>{data?.title}</ListItem>
              <ToggleButton
                onClick={handleClose}
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
        )}
        {data?.open && (
          <DialogContent dividers>{data?.Component}</DialogContent>
        )}
        {data?.action && (
          <DialogActions
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
              {data?.action}
            </LoadingButton>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}
