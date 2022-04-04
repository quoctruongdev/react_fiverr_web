import React from "react";
import { ListItem, List, Typography, ListItemText } from "@mui/material";
import { Card, CardContent, CardMedia, Stack, TextField } from "@mui/material";
import { Box, Divider } from "@mui/material";

function OrderDetail({ data }) {
  return (
    <Box minWidth={500} paddingBottom="15px">
      <Typography py={1} variant="h5" gutterBottom>
        Order Detail
      </Typography>
      <Card elevation={0} sx={{ display: "flex", border: "1px solid #ddd" }}>
        <CardMedia
          component="img"
          sx={{ width: 150 }}
          image={data?.image}
          alt="Live from space album cover"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <CardContent>
            <Typography fontWeight={600} variant="body1">
              {data?.name}
            </Typography>
          </CardContent>
          <Stack direction="row" alignItems="baseline">
            <TextField
              color="info"
              size="small"
              id="standard-basic"
              label="Qty"
              variant="standard"
              sx={{ width: 50 }}
            />
            <Typography
              sx={{
                fontWeight: 600,
                color: "#62646a",
              }}
              variant="body2"
            >
              US${data?.price}
            </Typography>
          </Stack>
        </Box>
      </Card>

      <Box paddingTop="15px">
        <Typography fontWeight={600} variant="h6">
          Price summary
        </Typography>
        <ListItemText primary />
      </Box>
      <List>
        <ListItem disablePadding>
          <ListItemText primary="Subtotal" />
          <Typography variant="body2">US$9</Typography>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Service Fee" />
          <Typography variant="body2">US$9</Typography>
        </ListItem>
      </List>
      <Divider variant="fullWidth" />
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={{
              sx: { fontWeight: 600 },
            }}
            primary=" Total "
          />
          <Typography fontWeight={600} variant="body1">
            US$94.9
          </Typography>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText secondary="Delivery Time" />
          <Typography variant="body2">2 days</Typography>
        </ListItem>
      </List>
    </Box>
  );
}

export default OrderDetail;
