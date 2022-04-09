import React from "react";
import { ListItem, List, Typography, ListItemText } from "@mui/material";
import { Card, CardContent, CardMedia, Stack, TextField } from "@mui/material";
import { Box, Divider } from "@mui/material";
import { useState } from "react";

function OrderDetail({ data, cost }) {
  const [qty, setQty] = useState(1);
  console.log(qty);
  const defautImg = "/asset/image_defaut.png";
  return (
    <Box
      sx={{
        minWidth: { xs: "100%", md: 500 },
      }}
      paddingBottom="15px"
    >
      <Typography py={1} variant="h5" gutterBottom>
        Order Detail
      </Typography>
      <Card elevation={0}>
        <CardMedia
          component="img"
          image={data?.image ? data?.image : defautImg}
          alt="Live from space album cover"
        />
        <CardContent
          sx={{
            px: 0,
          }}
        >
          <Typography texAlign="justify" fontWeight={600} variant="body1">
            {data?.name}
          </Typography>
        </CardContent>
        <Stack
          sx={{
            pb: 2,
          }}
          direction="row"
          alignItems="baseline"
        >
          <TextField
            color="info"
            size="small"
            id="standard-basic"
            onChange={(e) => {
              setQty(e.target.value);
            }}
            label="Qty"
            defaultValue={qty}
            inputProps={{
              type: "number",
              min: 1,
              max: 20,
            }}
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
            US${data?.price * cost * qty}
          </Typography>
        </Stack>
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
          <Typography variant="body2">US$4</Typography>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="Service Fee" />
          <Typography variant="body2">US$2</Typography>
        </ListItem>
      </List>
      <Divider variant="fullWidth" />
      <List>
        <ListItem disablePadding>
          <ListItemText
            primaryTypographyProps={{
              sx: { fontWeight: 600 },
            }}
            primary=" Total"
          />
          <Typography fontWeight={600} variant="body1">
            US${data.price * cost * qty + 2 + 4}
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
