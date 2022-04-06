import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import { ListItem, ListItemText, Tooltip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { red } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actShowModalPopup } from "../../../../components/ModalPopup/module/actions";
import LoginForm from "../Login/LoginForm/LoginForm";
import { actAddToListService } from "./module/action";
import { useState } from "react";

export default function CardSevices(props) {
  const { item, loading } = props;
  const data = useSelector((state) => state.myListServiceReducer.data);
  const useClient = localStorage.getItem("UserClient");
  const [selected, setSelected] = useState();
  const listsService = JSON.parse(localStorage.getItem("myList"));
  const duplicates = listsService?.filter((items) => items?._id === item?._id);

  const changeColorIcon = () => {
    if (duplicates?.[0]?._id === item?._id) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  };
  const dispatch = useDispatch();
  const handleUserCreated = () => {
    if (props.UserCreated) {
      return props.UserCreated[0];
    } else {
      return props.UserCreated;
    }
  };
  const UserCreated = handleUserCreated();
  const imageDefault = "/asset/image_defaut.png";

  const handleAddToList = () => {
    dispatch(actAddToListService(item));
  };

  return (
    <Grid item key={"card"} xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          maxWidth: "100%",
          transition: "all 0.1s ease-in-out",
          ":hover": {
            transform: "scale(1.019) translateY(-2px)",
            boxShadow:
              "0 40px 100px -20px rgb(0 0 10 / 20%), 0 30px 70px -30px rgb(0 0 0 / 40%)",
            transition: "all 0.1s ease-in-out",
          },
        }}
      >
        <Box
          component={Link}
          to={`/detail-service/${item?._id}/${item?.userCreated}`}
        >
          <CardMedia
            component="img"
            src={item?.image ? item?.image : imageDefault}
            srcSet={item?.image ? item?.image : imageDefault}
            image={item?.image ? item?.image : imageDefault}
            alt={item?.name}
            loading="lazy"
          />
        </Box>
        <CardHeader
          avatar={
            loading ? (
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
            ) : (
              <Avatar
                srcSet={UserCreated?.avatar}
                src={UserCreated?.avatar}
                sx={{ bgcolor: red[500], textTransform: "uppercase" }}
                aria-label="recipe"
                alt={UserCreated?.name ? UserCreated?.name : "Hidden Name"}
              >
                {UserCreated?.name ? UserCreated?.name?.slice(0, 1) : "H"}
              </Avatar>
            )
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            loading ? (
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            ) : UserCreated?.name ? (
              UserCreated?.name
            ) : (
              "Hidden Name"
            )
          }
          subheader={
            loading ? (
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            ) : (
              "Level 2 Seller"
            )
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
          {!item?.name ? (
            <>
              <Skeleton animation="wave" />
              <Skeleton animation="wave" width="80%" />
            </>
          ) : (
            <Typography
              to={`/detail-service/${item?._id}/${item?.userCreated}`}
              component={Link}
              align="center"
              maxHeight={43}
              sx={{
                textOverflow: "ellipsis",
                wordWrap: "break-word",
                cursor: "pointer",
                ":hover": {
                  color: "#1dbf73",
                  textDecoration: "none",
                },
              }}
              overflow={"hidden"}
              color="text.secondary"
            >
              {item?.name
                ? item?.name
                : "TI will create unique logo design and brand style guide"}
            </Typography>
          )}
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
          {loading ? (
            <Skeleton
              sx={{ marginLeft: "8px", width: "95%" }}
              animation="wave"
              variant="rectangular"
            />
          ) : (
            <>
              <ListItem sx={{ width: "32%" }} disableGutters>
                <Tooltip arrow placement="top-start" title={"Save to My list"}>
                  {useClient ? (
                    <IconButton
                      onClick={() => {
                        handleAddToList();
                        changeColorIcon();
                      }}
                      disableRipple
                    >
                      <FavoriteIcon
                        color={
                          selected ?? duplicates?.[0]?.count === 1
                            ? "error"
                            : "disabled"
                        }
                        sx={{
                          marginLeft: "5px",
                          cursor: "pointer",
                        }}
                        fontSize="small"
                      />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() => {
                        dispatch(
                          actShowModalPopup({
                            Component: <LoginForm />,
                            open: true,
                            sx: { p: 0 },
                          })
                        );
                      }}
                      disableRipple
                    >
                      <FavoriteIcon
                        sx={{ marginLeft: "5px", cursor: "pointer" }}
                        fontSize="small"
                      />
                    </IconButton>
                  )}
                </Tooltip>

                <ShareIcon sx={{ marginLeft: "5px" }} fontSize="small" />
              </ListItem>
              <ListItem
                component={Link}
                to={`/detail-service/${item?._id}/${item?.userCreated}`}
                sx={{
                  width: "100%",
                  paddingY: 0,
                  paddingRight: "8px",
                  ":hover": {
                    textDecoration: "none  ",
                  },
                }}
                alignItems="right"
                disableGutters
              >
                <ListItemText
                  primaryTypographyProps={{
                    style: {
                      paddingRight: "8px",
                      fontSize: 12,
                      fontWeight: 700,
                      textAlign: "right",
                      color: "#74767e",
                    },
                  }}
                  primary="STARTING AT"
                />
                <Typography color={"#404145"}>US${item?.price}</Typography>
              </ListItem>
            </>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}
