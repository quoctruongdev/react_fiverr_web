import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import List from "@mui/material/List";
import { useSelector } from "react-redux";
import Collapse from "@mui/material/Collapse";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ButtonStyle from "../../../../components/MaterialUI/ButtonStyle";
import { NavLink } from "react-router-dom";
import { actShowModalPopup } from "../../../../components/ModalPopup/module/actions";
import JoinForm from "../Join/JoinForm/JoinForm";
import { useHistory } from "react-router-dom";
import LoginForm from "../Login/LoginForm/LoginForm";
import { NavigateBeforeTwoTone } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { actLogout } from "../Login/modules/actions";
import { ListItem, ListItemAvatar, Avatar } from "@mui/material";

export default function NestedList() {
  const userClient = JSON.parse(localStorage.getItem("UserClient"))?.user;
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [opensub, setOpensub] = useState(false);
  const [refDataItem, setRefDataItem] = useState();
  const data = useSelector((state) => state.categoriesMainReducer.data);

  const handleSubClick = (item) => {
    if (refDataItem === item) {
      setRefDataItem();
    }
    setRefDataItem(item);
    return setOpensub(!opensub);
  };

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        !userClient && (
          <ListSubheader sx={{ padding: "16px" }} id="nested-list-subheader">
            <ButtonStyle
              style={{
                color: "#fff",
                textDecoration: "none",
              }}
              component={NavLink}
              to="/join"
              direction="row"
            >
              Join Fivver
            </ButtonStyle>
          </ListSubheader>
        )
      }
    >
      {userClient ? (
        <>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt={userClient?.name}
                src={
                  userClient?.avatar
                    ? userClient?.avatar
                    : "/static/images/avatar/1.jpg"
                }
                srcSet={
                  userClient?.avatar
                    ? userClient?.avatar
                    : "/static/images/avatar/1.jpg"
                }
              />
            </ListItemAvatar>
            <ListItemText
              primaryTypographyProps={{
                sx: { fontWeight: 600 },
              }}
              primary={userClient?.name}
            />
          </ListItem>

          <ListItemButton
            sx={{
              ":hover": { color: "#1dbf73" },
            }}
            component={NavLink}
            to="/"
          >
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton
            sx={{
              ":hover": { color: "#1dbf73" },
            }}
            component={NavLink}
            to="/total-service"
          >
            <ListItemText primary="Services" />
          </ListItemButton>
          <ListItemButton
            sx={{
              ":hover": { color: "#1dbf73" },
            }}
            component={NavLink}
            to={`my-list/${userClient?.name}`}
          >
            <ListItemText primary=" My Lists" />
          </ListItemButton>
        </>
      ) : (
        <>
          <ListItemButton
            sx={{
              ":hover": { color: "#1dbf73" },
            }}
            component={NavLink}
            to="/login"
          >
            <ListItemText primary="Sign In" />
          </ListItemButton>
          <ListItemButton
            sx={{
              ":hover": { color: "#1dbf73" },
            }}
            component={NavLink}
            to="/total-service"
          >
            <ListItemText primary="Services" />
          </ListItemButton>
        </>
      )}
      <ListItemButton
        sx={{
          ":hover": { color: "#1dbf73" },
        }}
        onClick={() => setOpen(!open)}
      >
        <ListItemText primary="Browse Categories" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {data
            ?.filter((item) => item?.__v > 10)
            ?.map((item, index) => {
              return (
                <>
                  <ListItemButton
                    onClick={() => handleSubClick(index)}
                    key={index}
                    sx={{ pl: 5, ":hover": { color: "#1dbf73" } }}
                  >
                    <ListItemText
                      sx={{
                        overflowX: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                      primary={item?.name}
                    />
                    {refDataItem === index && opensub ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )}
                  </ListItemButton>

                  <Collapse
                    in={refDataItem === index && opensub}
                    timeout="auto"
                    unmountOnExit
                    sx={{ pl: 4 }}
                  >
                    <List component="div" disablePadding>
                      {item?.subTypeJobs?.map((itemsub, index) => {
                        return (
                          <>
                            <ListItemButton
                              to={`/categories/${item?.name}/${item?._id}/${itemsub?.name}/${itemsub?._id}`}
                              component={NavLink}
                              key={`22${index}`}
                              sx={{
                                pl: 4,
                                ":hover": {
                                  color: "#1dbf73",
                                  textDecoration: "none",
                                },
                              }}
                            >
                              <ListItemText
                                sx={{
                                  overflowX: "hidden",
                                  whiteSpace: "nowrap",
                                  textOverflow: "ellipsis",
                                }}
                                primary={itemsub?.name}
                              />
                            </ListItemButton>
                          </>
                        );
                      })}
                    </List>
                  </Collapse>
                </>
              );
            })}
        </List>
      </Collapse>
      <Divider />
      {userClient && (
        <ListItemButton
          onClick={() => {
            dispatch(actLogout(history));
          }}
        >
          <ListItemText primary="Log out" />
        </ListItemButton>
      )}
    </List>
  );
}
