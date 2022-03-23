import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, Typography } from "@mui/material";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import PopularCarousel from "./PopularCarousel";
import MyCarousel from "./PopularCarousel/exam";

export default function Categories(props) {
  const { id, name } = props.match.params;
  return (
    <Box
      sx={{
        mx: 6,
        py: 4,
        minHeight: 1000,
      }}
    >
      <Box>
        <Box position="relative">
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                //   image="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png"
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3f1b7ea10295936b6846bcff0afd38cf-1626595415207/digital-marketing-desktop.png"
                srcSet="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3f1b7ea10295936b6846bcff0afd38cf-1626595415207/digital-marketing-desktop.png"
                alt=""
              />
            </CardActionArea>
          </Card>
          <Box
            alignItems="center"
            position="absolute"
            flexDirection="column"
            justifyContent="center"
            display="flex"
            zIndex={100}
            height="100%"
            width="100%"
            top={0}
          >
            <Typography color="#fff" variant="h4">
              Digital Marketing
            </Typography>
            <Typography color="#fff" variant="h6">
              Build your brand. Grow your busiess.
            </Typography>
            <Button
              sx={{
                mt: 3,
                color: "#fff",
                borderColor: "#fff",
                ":hover": {
                  borderColor: "#fff",
                  bgcolor: "#fff",
                  color: "#be5272",
                },
                textTransform: "none",
                padding: "10px 16px",
              }}
              variant="outlined"
              startIcon={<VideoLibraryRoundedIcon fontSize="small" />}
            >
              <Typography>How Fiverr Works</Typography>
            </Button>
          </Box>
        </Box>
        <Box mt={3}>{/* <PopularCarousel /> */}</Box>
        <Box>
          <MyCarousel id={id} name={name} />
        </Box>
      </Box>
    </Box>
  );
}
