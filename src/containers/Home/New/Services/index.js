import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import {
  TableContainer,
  Table,
  TableBody,
  Paper,
  Stack,
  Card,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import { TableCell, TableHead, TablePagination, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { IconButton, Avatar, Box, Button, Checkbox } from "@mui/material";
import { Typography, Tooltip } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import useModal from "../../../../Hook/ModalHook";
import DialogAdmin from "../../../Admin/_components/ModalAdmin/Dialog";
import { actFetchUpdateJob } from "../../../Admin/JobManagement/UpdateJob/modules/actions";
import { actFetchEditJob } from "../../../Admin/JobManagement/UpdateJob/Edit/_modules/actions";
import { actFetchSearchService } from "./modules/actions";
import { actFetchListJob } from "../../../Admin/JobManagement/_module/actions";
import CustomizedSearch from "../../../Admin/_components/Search/SearchMui";
import useWindowSize from "../../../../Hook/useWindowSize";
import Loader from "../../../../components/Loader/Loader";
import { Skeleton } from "@mui/material";

export default function Services() {
  const [keySearch, setkeyName] = useState(null);
  const size = useWindowSize();
  const { open, handleOpen, handleClose } = useModal();
  const [dataEditUser, setDataEditUser] = useState({
    title: "",
    genders: "",
    roles: "",
  });
  const loading = useSelector((state) => state.listJobReducer.loading);
  const services = useSelector((state) => state.listJobReducer.data);
  const dataSearch = useSelector((state) => state.searchServiceReducer.data);

  const dispatch = useDispatch();
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [selectedServicerIds, setSelectedUserIds] = useState([]);

  useEffect(() => {
    dispatch(actFetchListJob());
    dispatch(actFetchSearchService(keySearch));
  }, [keySearch]);

  ////Table//////
  const handleSelectAll = (event) => {
    let newSelectedUserIds;
    if (event.target.checked) {
      newSelectedUserIds = services?.map((service) => service?._id);
    } else {
      newSelectedUserIds = [];
    }
    setSelectedUserIds(newSelectedUserIds);
  };
  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedServicerIds.indexOf(id);
    let newSelectedUserIds = [];

    if (selectedIndex === -1) {
      newSelectedUserIds = newSelectedUserIds.concat(selectedServicerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedUserIds = newSelectedUserIds.concat(
        selectedServicerIds.slice(1)
      );
    } else if (selectedIndex === selectedServicerIds.length - 1) {
      newSelectedUserIds = newSelectedUserIds.concat(
        selectedServicerIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedUserIds = newSelectedUserIds.concat(
        selectedServicerIds.slice(0, selectedIndex),
        selectedServicerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedUserIds(newSelectedUserIds);
  };
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  const handleLimitChange = (event) => {
    setLimit(event.target.value);
    setPage(0);
  };
  const colorTableCell = {
    backgroundColor: selectedServicerIds?.length > 0 ? "#C8FACD" : "#b9c4cc",
  };

  ////Search //////

  const handleSearch = useCallback((value) => {
    setkeyName(value);
    setPage(0);
  }, []);

  const handleDataTable = (data) => {
    return data?.slice(page * limit, page * limit + limit)?.map((service) => {
      return (
        <>
          <TableRow
            className="table__service"
            hover
            key={service?._id}
            selected={selectedServicerIds.indexOf(service?._id) !== -1}
          >
            <TableCell padding="checkbox">
              <Checkbox
                checked={selectedServicerIds.indexOf(service?._id) !== -1}
                onChange={(event) => handleSelectOne(event, service?._id)}
                value="true"
                color="secondary"
              />
            </TableCell>
            <TableCell
              padding="none"
              sx={{
                maxWidth: 150,
                maxHeight: 100,
                overflow: "hidden",
                textOverflow: "clip",
              }}
            >
              {service?.name}
            </TableCell>
            <TableCell padding="none" align="center">
              {service?.rating}
            </TableCell>
            <TableCell padding="none" align="center">
              {service?.price}
            </TableCell>
            <TableCell padding="none">
              <Card sx={{ width: 100, transform: "translateX(65%)" }}>
                <CardActionArea>
                  {service?.image ? (
                    <CardMedia
                      component="img"
                      height="140"
                      image={service?.image}
                      loading="lazy"
                      alt={service?.name}
                    />
                  ) : (
                    <Skeleton
                      variant="rectangular"
                      animation={"pulse"}
                      width={100}
                      height={66}
                    />
                  )}
                </CardActionArea>
              </Card>
            </TableCell>
            <TableCell padding="none" align="center">
              <Tooltip title="Edit">
                <IconButton
                  onClick={() => {
                    handleOpen();
                    setDataEditUser({
                      title: "Edit User",
                      genders: service?.gender,
                      roles: service?.role,
                    });
                    // dispatch(actFetchEditUser(service?._id));
                  }}
                >
                  <Edit color="secondary" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton
                  onClick={() => {
                    // dispatch(actFetchDeleteUser(service?._id));
                    setSelectedUserIds([]);
                    alert(`Delete service ${service?.name || null} success`);
                  }}
                >
                  <PersonRemoveIcon color="warning" />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        </>
      );
    });
  };

  const renderTableFinal = () => {
    if (!keySearch) {
      return handleDataTable(services);
    } else if (!dataSearch?.length) {
      return (
        <TableRow sx={{ height: 300 }}>
          <TableCell colSpan={7}>
            <Typography align="center" variant="h4">
              No Data
            </Typography>
          </TableCell>
        </TableRow>
      );
    } else {
      return handleDataTable(dataSearch);
    }
  };

  return (
    <Box sx={{ mx: 5, mt: 3, mb: 5 }}>
      <Box>
        <Typography variant="h4">Services List</Typography>
      </Box>
      <Paper
        elevation={0}
        sx={{
          marginTop: "20px",
          overflow: "auto",
          p: 3,
        }}
      >
        <Stack
          height="40px"
          justifyContent="space-between"
          alignItems="center"
          direction="row"
        >
          <Button
            color="secondary"
            variant="contained"
            onClick={() => {
              handleOpen();
              setDataEditUser({
                title: "Add Service",
              });
            }}
          >
            Add Service
          </Button>
          <CustomizedSearch
            handleSearch={handleSearch}
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "50%",
              height: 50,
            }}
            placeholder="Search service..."
            variant="outlined"
          />
        </Stack>
      </Paper>
      <>
        <Paper
          sx={{
            marginTop: "24px",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <TableContainer sx={{ maxHeight: 480 }}>
            <Table
              size={size.width < 792 ? "small" : "medium"}
              stickyHeader={true}
              aria-label="sticky table"
              // sx={{ whiteSpace: "nowrap", overflow: "hidden" }}
            >
              <TableHead>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={colorTableCell} padding="checkbox">
                    <Checkbox
                      checked={selectedServicerIds?.length === services?.length}
                      color="primary"
                      indeterminate={
                        selectedServicerIds?.length > 0 &&
                        selectedServicerIds?.length < services?.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell sx={colorTableCell}>
                    {selectedServicerIds?.length
                      ? selectedServicerIds?.length + " Service selected"
                      : "Name"}
                  </TableCell>
                  <TableCell align="center" sx={colorTableCell}>
                    {selectedServicerIds?.length ? "" : "Rating"}
                  </TableCell>
                  <TableCell align="center" sx={colorTableCell}>
                    {selectedServicerIds?.length ? "" : "Price"}
                  </TableCell>
                  <TableCell align="center" sx={colorTableCell}>
                    {selectedServicerIds?.length ? "" : "Image"}
                  </TableCell>
                  {/* <TableCell sx={colorTableCell}>
                    {selectedServicerIds?.length ? "" : "Skill"}
                  </TableCell> */}
                  <TableCell align="center" sx={colorTableCell}>
                    {selectedServicerIds?.length > 1 &&
                    selectedServicerIds?.length !== services?.length ? (
                      <>
                        <Tooltip title="Delete multiple services">
                          <LoadingButton
                            sx={{ marginLeft: "10px" }}
                            onClick={(index) => {
                              if (selectedServicerIds?.length < 4) {
                                for (
                                  index = 0;
                                  index < selectedServicerIds?.length;
                                  index++
                                ) {
                                  const element = selectedServicerIds[index];
                                  // dispatch(actFetchDeleteUser(element));
                                }
                                setSelectedUserIds(
                                  selectedServicerIds.splice(index, 1)
                                );
                                alert("Delete service success");
                              } else {
                                return alert(
                                  "You can only delete up to 3 services at a time. Please choose again"
                                );
                              }
                            }}
                            color="secondary"
                            loadingPosition="start"
                            variant="contained"
                          >
                            <DeleteIcon />
                          </LoadingButton>
                        </Tooltip>
                      </>
                    ) : (
                      "Action"
                    )}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{renderTableFinal()}</TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={keySearch ? dataSearch?.length : services?.length || 0}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[
              5,
              10,
              25,
              50,
              100,
              { label: "All", value: -1 },
            ]}
            SelectProps={{
              sx: { color: "blue" },
            }}
          />
          <DialogAdmin
            dataEditUser={dataEditUser}
            open={open}
            onClose={handleClose}
          />
        </Paper>
      </>
    </Box>
  );
}
