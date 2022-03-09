import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchUpdateUser } from "./modules/actions";
import Loader from "../../../../components/Loader/Loader";

export default function UpdateUser(props) {
  const loading = useSelector((state) => state.editUserReducer.loading);
  const data = useSelector((state) => state.editUserReducer.data);

  const dispatch = useDispatch();

  const [update, setUpdate] = useState({
    name: data?.name,
    email: data?.email,
    phone: data?.phone,
    skill: data?.skill,
    certification: data?.certification,
    birthday: data?.birthday,
    gender: data?.gender,
    role: data?.role,
  });
  console.log(update);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    dispatch(actFetchUpdateUser(props.match.params.id, update, props.history));
    if (loading) {
      <Loader />;
    }
  };

  const handleOnchange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setUpdate({
      ...update,
      [name]: value,
    });
  };

  const SelectRole = (value) => {
    if (data?.role === "ADMIN") {
      return (value = "CLIENT");
    }
    if (data?.role === "CLIENT") {
      return (value = "ADMIN");
    }
  };
  const SelectGender = () => {
    if (data?.gender === true) {
      return false;
    } else {
      return true;
    }
  };
  const SelectGenderType = () => {
    if (data?.gender === true) {
      return "Male";
    } else {
      return "Female";
    }
  };
  const SelectGenderType2 = () => {
    if (data?.gender === true) {
      return "Female";
    } else {
      return "Male";
    }
  };

  return (
    <>
      <h3> Update Administrator </h3>
      <section className="p-6 dark:bg-coolGray-800 dark:text-coolGray-50">
        <form
          onSubmit={handleUpdateUser}
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
                  defaultValue={data?.email}
                  id="Email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full h-2/3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="Name" className="text-sm">
                  Full Name
                </label>
                <input
                  onChange={handleOnchange}
                  defaultValue={data?.name}
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
                  defaultValue={data?.birthday}
                  maxLength={10}
                  datatype="yyyy/mm/dd"
                  id="Birthday"
                  type="text"
                  name="birthday"
                  placeholder="yyyy-mm-dd"
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
                  defaultValue={data?.certification}
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
                  defaultValue={data?.skill}
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
                  defaultValue={data?.phone}
                  id="Phone"
                  name="phone"
                  type="text"
                  minLength={8}
                  maxLength={13}
                  placeholder="+84.........."
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
                  <option selected="selected" value={data?.gender}>
                    {SelectGenderType()}
                  </option>
                  <option value={SelectGender()}> {SelectGenderType2()}</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="Role" className="text-sm">
                  Role
                </label>
                <select
                  onChange={handleOnchange}
                  class="w-full h-2/3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
                  name="role"
                  id="Role"
                >
                  <option selected="selected" value={data?.role}>
                    {data?.role}
                  </option>
                  <option value={SelectRole()}>{SelectRole()}</option>
                </select>
              </div>
            </div>
          </fieldset>
          <button
            className=" bg-indigo-800 w-1/5 py-2   text-white  rounded  "
            type="submit"
          >
            Update
          </button>
        </form>
      </section>
    </>
  );
}
