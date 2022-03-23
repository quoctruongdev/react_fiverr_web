import * as React from "react";
import { useState } from "react";
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

export default function NestedList() {
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
        <ListSubheader
          sx={{ padding: "16px" }}
          component="div"
          id="nested-list-subheader"
        >
          <ButtonStyle>Join Fivver</ButtonStyle>
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemText primary="Sign In" />
      </ListItemButton>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemText primary="Browse Categories" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {data?.map((item, index) => {
            return (
              <>
                <ListItemButton
                  onClick={() => handleSubClick(index)}
                  key={index}
                  sx={{ pl: 5 }}
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
    </List>
  );
}
