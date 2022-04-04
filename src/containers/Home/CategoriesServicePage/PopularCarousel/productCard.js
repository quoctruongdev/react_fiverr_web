import React from "react";
import { Card, CardMedia } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemAvatar, ListItemText } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ProductCard = ({ imgSrc }) => {
  return (
    <>
      <List
        sx={{
          padding: " 8px",
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <CardMedia
              sx={{ width: 48 }}
              component={"img"}
              image="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285638/Book%20Editing.png"
              srcSet="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285638/Book%20Editing.png"
            />
          </ListItemAvatar>
          <ListItemText
            sx={{
              mx: 0,
              whiteSpace: "nowrap",
              maxWidth: "fit-content",
              ":hover": { color: "#1dbf73" },
            }}
            primaryTypographyProps={{
              sx: { fontWeight: 600, fontSize: 16 },
            }}
            primary="{item?.name}sdfsdfsf"
          />
          <ArrowForwardIcon sx={{ pl: 0.5, ml: 0.5 }} fontSize="small" />
        </ListItem>
      </List>
    </>
  );
};

export default ProductCard;
