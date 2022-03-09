import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "antd";
import ButtonStyle from "../../../../components/Material UI/ButtonStyle";
import ButtonSocial from "../../../../components/Material UI/ButtonStyle/ButtonSocial/Social";
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function LoginMui() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 400,
          height: 530,
        },
      }}
    >
      <Paper elevation={4}>
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="h1">
            Sign In to Fiverr
          </Typography>
        </Box>
        <ButtonStyle>
          <ListItem>
            <ListItemIcon>
              <FacebookRoundedIcon fontSize="medium" />
            </ListItemIcon>
            Connect with Facebook
          </ListItem>
        </ButtonStyle>
      </Paper>
    </Box>
  );
}
