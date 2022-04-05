import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useDispatch } from "react-redux";
import { actFetchDeleteUser } from "../../UsersManagement/Delete/modules/actions";
import { actFetchDeleteService } from "../../ServicesManagement/Delete/modules/actions";
import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { actSetMessage } from "../../../../components/Notification/module/actions";
import { actShowModalPopup } from "../../../../components/ModalPopup/module/actions";
import EditUser from "../../UsersManagement/Edit/EditUser";
import EditService from "../../ServicesManagement/Edit/EditService";
import { actPopoverGlobal } from "../../../../components/Popover/module/actions";

export default function ListAction(props) {
  const dispatch = useDispatch();
  const { userItem, setSelectedIds, serviceItem } = props;

  const action = (
    <>
      <Button
        onClick={() => {
          userItem && dispatch(actFetchDeleteUser(userItem?._id));
          serviceItem && dispatch(actFetchDeleteService(serviceItem?._id));
          setSelectedIds([]);
          dispatch(actSetMessage(null));
          dispatch(actPopoverGlobal());
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
          dispatch(actSetMessage(null));
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <ListItemButton
        onClick={() => {
          userItem &&
            dispatch(
              actShowModalPopup({
                Component: <EditUser userItem={userItem} />,
                open: true,
                title: "Edit User",
                // action: "Save Change",
              })
            );
          serviceItem &&
            dispatch(
              actShowModalPopup({
                Component: <EditService serviceItem={serviceItem} />,
                open: true,
                title: "Edit Service",
                // action: "Save Change",
              })
            );
        }}
        sx={{ py: 0.5 }}
      >
        <ListItemIcon
          sx={{
            minWidth: 50,
          }}
        >
          <EditIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Edit" />
      </ListItemButton>
      <ListItemButton
        sx={{ py: 0.5 }}
        onClick={() => {
          userItem &&
            dispatch(
              actSetMessage(
                `Are you sure delete ${userItem?.name || ""} user`,
                "info",
                action
              )
            );
          serviceItem &&
            dispatch(
              actSetMessage(
                `Are you sure delete ${serviceItem?.name || ""} service`,
                "info",
                action
              )
            );
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 50,
          }}
        >
          <PersonRemoveIcon color="error" />
        </ListItemIcon>
        <ListItemText primary="Delete" />
      </ListItemButton>
    </>
  );
}
