import React from "react";
import { useSelector } from "react-redux";
import Loader from "../../../../components/Loader/Loader";
import LoginForm from "./LoginForm/LoginForm";
import "./style.css";
import { Box } from "@mui/material";
export default function Login(props) {
  // const [dataLogin, setDataLogin] = useState({
  //   email: "",
  //   password: "",
  // });

  // const dispatch = useDispatch();
  const loading2 = useSelector((state) => state.categoriesMainReducer.loading);
  const loading = useSelector((state) => state.loginReducerHome.loading);
  // const error = useSelector((state) => state.loginReducerHome.error);

  // const handleOnChange = (event) => {
  //   const { name, value } = event.target;
  //   setDataLogin({
  //     ...dataLogin,
  //     [name]: value,
  //   });
  // };
  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   dispatch(actLoginApi(dataLogin, props.history));
  // };

  // const renderNotice = () => {
  //   return (
  //     error && (
  //       <div className="alert alert-danger">
  //         {error?.response?.data.content || error?.response?.data.message}
  //       </div>
  //     )
  //   );
  // };
  if (loading2 || loading) return <Loader />;

  return (
    <>
      <div className="Login__component">
        <LoginForm history={props.history} />
      </div>
    </>
  );
}
