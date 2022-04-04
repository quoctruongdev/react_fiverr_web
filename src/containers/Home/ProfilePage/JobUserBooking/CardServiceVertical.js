import { Button, Rating, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
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
          sx={{
            display: "flex",
            transition: ".3 linear",
            transform: "translate(0)",
            ":hover": {
              transform: " scale(1.019) translateY(-2px)",
              boxShadow:
                "0 40px 100px -20px rgb(0 0 10 / 20%), 0 30px 70px -30px rgb(0 0 0 / 40%)",
              transition: "all 0.1s ease-in-out",
            },
            marginTop: "20px",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: "30%" }}
            image={data?.image ? data?.image : imageDefault}
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h6">
                {data?.name}
              </Typography>
              <Typography
                variant="subtitle1"
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
                >
                  {data?.rating}
                </Typography>
                <Rating
                  size="small"
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
                to={`/detail-job/${data?._id}/${data?.userCreated}`}
                sx={{ mx: 1, ":hover": { color: "#9c27b0" } }}
                variant="text"
                color="secondary"
              >
                Read More
              </Button>
              {/* <Button
                onClick={() => {
                  dispatch(actFetchDoneServiceUserBooking(data?._id));
                }}
                sx={{ mx: 1 }}
                variant="text"
                color="error"
              >
                Remove
              </Button> */}
            </Box>
          </Box>
        </Card>
      )}
    </>
  );
}
