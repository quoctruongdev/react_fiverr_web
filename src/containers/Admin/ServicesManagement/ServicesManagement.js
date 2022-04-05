import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actShowModalPopup } from "../../../components/ModalPopup/module/actions";
import CustomizedSearch from "../_components/Search/SearchMui";
import AddService from "./Add/AddService";
import { actFetchSearchService } from "./Search/modules/actions";
import "./style.css";
import TableServices from "./_component/TableServices";

export default function ServicesManagement() {
  const [keySearch, setkeyName] = useState("");
  const dispatch = useDispatch();

  const services = useSelector((state) => state.searchServiceReducer.data);
  const loading = useSelector((state) => state.searchServiceReducer.loading);

  const loadingDelete = useSelector(
    (state) => state.deleteServiceReducer.loading
  );
  const dataDelete = useSelector((state) => state.deleteServiceReducer.data);
  const dataUpdate = useSelector((state) => state.updateServiceReducer.data);
  const dataAdd = useSelector((state) => state.addServiceReducer.data);

  useEffect(() => {
    dispatch(actFetchSearchService(keySearch, 0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keySearch, dataDelete, dataUpdate, dataAdd]);

  ////Search //////
  const handleSearch = useCallback((value) => {
    setkeyName(value);
  }, []);

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
              dispatch(
                actShowModalPopup({
                  Component: <AddService />,
                  open: true,
                  title: "Add Service",
                  // action: "Create Service",
                })
              );
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
          <TableServices
            services={services}
            loading={loading}
            keySearch={keySearch}
          />
        </Paper>
      </>
    </Box>
  );
}
