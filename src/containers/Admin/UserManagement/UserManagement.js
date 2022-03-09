/* eslint-disable no-sequences */
import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table } from "antd";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { actFetchListUser } from "./_modules/actions";
import { NavLink } from "react-router-dom";
import { actFetchDeleteUser } from "./DeleteUser/modules/actions";
import { actFetchEditUser } from "./UpdateUser/Edit/_modules/actions";
import Popup from "../_components/Popup/Popup";
import Loader from "../../../components/Loader/Loader";
import { Avatar } from "@mui/material";

export default function UserManagement(props) {
  const [state, setState] = useState({
    visible: false,
    title: "",
    style: {
      display: "",
    },
    id: null,
  });

  const loading = useSelector((state) => state.listUserReducer.loading);
  const data = useSelector((state) => state.listUserReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchListUser());
  }, [dispatch]);

  const resetForm = () => {
    document.getElementById("AddUserForm").reset();
  };
  const showModal = () => {
    setState({
      visible: true,
      title: "Add",
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
    // {
    //   title: "ID",
    //   dataIndex: "_id",
    //   textOverflow: "hidden",
    // },
    {
      title: "User Name",
      dataIndex: "name",
      width: "20%",
      sorter: (a, b) => a.name?.length - b.name?.length,
    },
    // {
    //   title: "Certification",
    //   dataIndex: "certification",
    //   sorter: (a, b) => a.name.length - b.name.length,
    //   sortDirections: ["descend"],
    //   width: "10%",
    // },
    {
      title: "Avatar",
      dataIndex: "avatar",
      render: (item) => {
        return (
          <Fragment>
            <Avatar src={item?.avatar} alt={item?.name} />
          </Fragment>
        );
      },
      width: "5%",
    },

    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.email.length - b.email.length,
      width: "15%",
    },

    {
      title: "Phone",
      dataIndex: "phone",
      sorter: (a, b) => a.phone - b.phone,
      width: "15%",
    },
    {
      title: "Role",
      dataIndex: "role",
      sorter: (a, b) => a.role?.length - b.role?.length,
      width: "8%",
    },
    {
      title: "Skill",
      dataIndex: "skill",
      sorter: (a, b) => a.skill.length - b.skill.length,
      width: "20%",
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
              to={`/dashboard/update-user/${item._id}`}
              onClick={() => {
                dispatch(actFetchEditUser(item._id));
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
                    "Are you sure you want to delete this user: " +
                      item.name +
                      "?"
                  )
                ) {
                  dispatch(actFetchDeleteUser(item._id));
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
        <h3>User Management</h3>
        {/* <Popup /> */}
        <Button
          type="primary"
          className="mb-4 rounded  "
          onClick={() => {
            showModal();
          }}
        >
          Add Administrator
        </Button>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
      <Popup state={state} close={handleCancel} normal={handleOk} />
    </>
  );
}
