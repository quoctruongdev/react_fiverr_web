import React from "react";
import {
  Card,
  Skeleton,
  Box,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";

export default function SkeletonCard() {
  return (
    <Grid item key={"card"} xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          maxWidth: "100%",
          height: 400,
          transition: "all 0.1s ease-in-out",
          ":hover": {
            transform: "scale(1.019) translateY(-2px)",
            boxShadow:
              "0 40px 100px -20px rgb(0 0 10 / 20%), 0 30px 70px -30px rgb(0 0 0 / 40%)",
            transition: "all 0.1s ease-in-out",
          },
        }}
      >
        <Box>
          <Skeleton
            sx={{ height: 208 }}
            animation="wave"
            variant="rectangular"
          />
        </Box>
        <CardHeader
          avatar={
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          }
          title={
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          }
          subheader={
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          }
        />

        <CardContent
          sx={{
            margin: "0 16px 16px 16px",
            height: 50,
            overflow: "hidden",
            padding: 0,
          }}
        >
          <>
            <Skeleton animation="wave" />
            <Skeleton animation="wave" width="80%" />
          </>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            color: "#b5b6ba",
            borderTop: "1px solid #efeff0 ",
          }}
          disableSpacing
        >
          <Skeleton sx={{ marginLeft: "8px", width: "95%" }} animation="wave" />
          <Skeleton sx={{ marginLeft: "8px", width: "95%" }} animation="wave" />
          <Skeleton sx={{ marginLeft: "8px", width: "95%" }} animation="wave" />
        </CardActions>
      </Card>
    </Grid>
  );
}
