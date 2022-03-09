import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table } from "antd";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { actFetchListJob } from "./_module/actions";
import { NavLink } from "react-router-dom";
import { actFetchDeleteJob } from "./DeleteJob/modules/actions";

// import { actFetchUpdateUser } from "./UpdateUser/modules/actions";
import Popup from "../_components/Popup/Popup";
import Loader from "../../../components/Loader/Loader";
// import { Redirect } from "react-router-dom";

export default function JobManagement(props) {
  const [state, setState] = useState({
    visible: false,
    title: "",
    style: {
      display: "",
    },
    id: null,
  });

  const loading = useSelector((state) => state.listJobReducer.loading);
  const data = useSelector((state) => state.listJobReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchListJob());
  }, [dispatch]);

  const resetForm = () => {
    document.getElementById("AddUserForm").reset();
  };
  const showModal = () => {
    setState({
      visible: true,
      title: "Add",
      // display: "block",
      // stateUpdate: {
      //   name: "",
      //   email: "",
      //   password: "",
      //   phone: "",
      //   skill: "",
      //   certification: "",
      //   birthday: "",
      //   gender: null,
      //   role: "",
      // },
    });
  };
  // const showModalUpdate = (id) => {
  //   setState({
  //     visible: true,
  //     title: "Update",
  //     style: {
  //       display: "none",
  //     },
  //     id: id,
  //   });
  // };

  const handleOk = (e) => {
    console.log(e);
    setState({
      visible: false,
    });
  };

  const handleCancel = (e) => {
    console.log(e);
    resetForm();
    setState({
      visible: false,
    });
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      width: "10%",
      render: (text, item) => {
        return (
          <Fragment>
            {item._id.length > 10 ? item._id.substr(0, 10) + "..." : item._id}
          </Fragment>
        );
      },
      sortDrections: ["descen"],
    },
    {
      title: "Name JOB",
      dataIndex: "name",
      width: "20%",
      render: (text, item) => {
        return (
          <Fragment>
            {item.name > 50 ? item.name.substr(0, 50) + "..." : item.name}
          </Fragment>
        );
      },
    },
    {
      title: "Rating",
      dataIndex: "rating",
      sorter: (a, b) => a.rating - b.rating,
      sortDirections: ["descend"],
      width: "5%",
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      sortDirections: ["descend"],
      width: "5%",
    },
    {
      title: "Image",
      dataIndex: "image",

      render: (index, item) => {
        return (
          <Fragment>
            <img
              key="index"
              className="ml-2"
              alt=""
              src={item.image}
              style={{ width: 80, height: 80 }}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${index}/50/50 `;
              }}
            />
          </Fragment>
        );
      },
      sortDrections: ["descend", "ascend"],
      width: "10%",
    },
    {
      title: "Action",
      // dataIndex: "action",

      render: (item) => {
        return (
          <Fragment>
            <NavLink
              key="1"
              className=" p-2 "
              to={`/dashboard/update-job/${item._id}`}
              onClick={() => {
                // dispatch(actFetchEditJob(item._id));
              }}
            >
              <EditIcon color="secondary" />
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              key="2"
              onClick={() => {
                if (
                  window.confirm(
                    "Are you sure you want to delete this job: " +
                      item.name +
                      "?"
                  )
                ) {
                  dispatch(actFetchDeleteJob(item._id));
                }
              }}
            >
              <DeleteIcon color="error" />
            </span>
          </Fragment>
        );
      },

      width: "10%",
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="container text text-4xl  ">
        <h3>Job Management</h3>
        {/* <Popup /> */}
        <Button
          type="primary"
          className="mb-4 rounded  "
          onClick={() => {
            showModal();
          }}
        >
          Add Job
        </Button>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
      <Popup state={state} close={handleCancel} normal={handleOk} />
    </>
  );
}
