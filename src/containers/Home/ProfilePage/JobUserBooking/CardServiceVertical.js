import * as React from "react";
import { useEffect } from "react";
import { Button, Rating, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { actFetchDoneServiceUserBooking } from "../RemoveServiceUserBooking/modules/actions";

export default function CardServiceVertical({ data }) {
  const imageDefault = "/asset/image_defaut.png";
  const dispatch = useDispatch();
  return (
    <>
      {data?.usersBooking && (
        <Card
          elevation={0}
          sx={{
            borderRadius: "0px",
            border: "1px solid #dadbdd",
            display: "flex",
            transition: ".3 linear",
            transform: "translate(0)",
            ":hover": {
              border: "none",
              transform: " scale(1.019) translateY(-2px)",
              boxShadow:
                "0 40px 100px -20px rgb(0 0 10 / 20%), 0 30px 70px -30px rgb(0 0 0 / 40%)",
              transition: "all 0.1s ease-in-out",
            },
            marginTop: "20px",
            maxHeight: { xs: 120, md: 160, sm: 130 },
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: "30%" }}
            image={data?.image ? data?.image : imageDefault}
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <CardContent
              sx={{
                flex: "1 0 auto",
                px: {
                  sx: "8px",
                  sm: "10px",
                  md: "12px",
                  lg: "16px",
                },
                py: "8px",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: 12,
                    sm: 14,
                    md: 16,
                    lg: 20,
                  },
                  lineHeight: 1.2,
                }}
                variant="h6"
              >
                {data?.name}
              </Typography>
              <Typography
                sx={{
                  display: { xs: "none", md: "none", lg: "block" },
                }}
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
                {data?.name}
              </Typography>
              <Stack direction="row" alignItems="center">
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={{
                    fontSize: { xs: 12, md: 16, sm: 14, lg: 18 },
                  }}
                >
                  {data?.rating}
                </Typography>
                <Rating
                  sx={{
                    fontSize: { xs: 12, md: 16, sm: 14, lg: 18 },
                  }}
                  name="read-only"
                  max={1}
                  value={1}
                  readOnly
                />
              </Stack>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Button
                LinkComponent={NavLink}
                to={`/detail-service/${data?._id}/${data?.userCreated}`}
                sx={{
                  mx: 1,
                  ":hover": { color: "#9c27b0" },
                  fontSize: { xs: 10, sm: 10, md: 12, lg: 16 },
                }}
                variant="text"
                color="secondary"
              >
                Read More
              </Button>
              <Button
                onClick={() => {
                  dispatch(actFetchDoneServiceUserBooking(data?._id));
                }}
                sx={{ mx: 1, fontSize: { xs: 10, sm: 10, md: 12, lg: 16 } }}
                variant="text"
                color="error"
              >
                Remove
              </Button>
            </Box>
          </Box>
        </Card>
      )}
    </>
  );
}
