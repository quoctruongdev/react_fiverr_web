import React, { useState } from "react";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { actFetchAddUser } from "../../UserManagement/AddUser/modules/actions";

export default function Popup(props) {
  const dispatch = useDispatch();
  const state = props.state;
  const normal = props.normal;
  const close = props.close;
  console.log(state);

  const [stateUser, setStateUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    skill: "",
    certification: "",
    birthday: "",
    gender: null,
    role: "",
  });

  const handleAddUser = (e) => {
    e.preventDefault();
    console.log(stateUser);
    dispatch(actFetchAddUser(stateUser));
    document.getElementById("AddUserForm").reset();
  };
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setStateUser({
      ...stateUser,
      [name]: value,
    });
  };
  return (
    <>
      <Modal
        title={`${state?.title} Administrator`}
        visible={state?.visible}
        onOk={normal}
        onCancel={close}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        width={900}
        centered={true}
        footer={<div className="p-3"></div>}
      >
        <section className="p-5  dark:bg-coolGray-800 dark:text-coolGray-50">
          <form
            onSubmit={handleAddUser}
            novalidate=""
            action=""
            id="AddUserForm"
            className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <fieldset className="grid grid-cols-1 gap-6 p-6 rounded-md shadow-sm dark:bg-coolGray-900">
              <div className="grid grid-cols-6 gap-10  col-span-full lg:col-span-3">
                <div className="col-span-full  sm:col-span-3">
                  <label htmlFor="Email" className="text-sm">
                    Email
                  </label>
                  <input
                    onChange={handleOnchange}
                    id="Email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full h-2/3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
                  />
                </div>
                <div
                  style={state?.style}
                  className="col-span-full sm:col-span-3"
                >
                  <label htmlFor="Password" className="text-sm">
                    PassWord
                  </label>
                  <input
                    onChange={handleOnchange}
                    name="password"
                    id="Password"
                    type="password"
                    placeholder="PassWord"
                    className="w-full h-2/3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
                  />
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="Name" className="text-sm">
                    Full Name
                  </label>
                  <input
                    onChange={handleOnchange}
                    id="Name"
                    name="name"
                    type="text"
                    placeholder="First name"
                    className="w-full h-2/3  rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="password" className="text-sm">
                    Birthday
                  </label>
                  <input
                    onChange={handleOnchange}
                    id="Birthday"
                    type="date"
                    name="birthday"
                    className="w-full h-2/3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
                  />
                </div>
              </div>
            </fieldset>
            <fieldset className="grid grid-cols-1 gap-6 p-6 rounded-md shadow-sm dark:bg-coolGray-900">
              <div className="grid grid-cols-6 gap-10  col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="Certification" className="text-sm">
                    Certification
                  </label>
                  <input
                    onChange={handleOnchange}
                    id="Certification"
                    type="text"
                    name="certification"
                    placeholder="Certification"
                    className="w-full h-2/3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="Skill" className="text-sm">
                    Skill
                  </label>
                  <input
                    onChange={handleOnchange}
                    id="Skill"
                    name="skill"
                    type="text"
                    placeholder="Skill"
                    className="w-full h-2/3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="Phone" className="text-sm">
                    Phone Number
                  </label>
                  <input
                    onChange={handleOnchange}
                    id="Phone"
                    name="phone"
                    type="text"
                    placeholder="+84 000 000 000"
                    className="w-full h-2/3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="gender" className="text-sm">
                    Gender
                  </label>
                  <select
                    placeholder="Select gender"
                    onChange={handleOnchange}
                    class="w-full h-2/3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
                    name="gender"
                    id="gender"
                  >
                    <option value="" disabled selected>
                      Select gender
                    </option>
                    <option value={true}> Male </option>
                    <option value={false}> Female</option>
                  </select>
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="Role" className="text-sm">
                    Type
                  </label>
                  <select
                    onChange={handleOnchange}
                    class="w-full h-2/3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
                    name="role"
                    id="Role"
                  >
                    <option value="" selected disabled>
                      Seclect Role
                    </option>
                    <option value="CLIENT">CLIENT </option>
                    <option value="ADMIN"> ADMIN</option>
                  </select>
                </div>
              </div>
            </fieldset>
            <button
              className=" bg-indigo-800 w-1/5 py-2   text-white  rounded  "
              type="submit"
            >
              {state?.title}
            </button>
          </form>
        </section>
        {/* <UpdateUser/> */}
      </Modal>
    </>
  );
}
