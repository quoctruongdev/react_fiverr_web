import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, withRouter } from "react-router";
import BackToTop from "./components/BackToTop/BackToTop";
import Loader from "./components/Loader/Loader";
import ModalPopup from "./components/ModalPopup";
import MessageNotification from "./components/Notification";
import AuthPage from "./containers/Admin/AuthPage/AuthPage";
import { actTryLogin } from "./containers/Admin/AuthPage/modules/actions";
import { actTryLoginHome } from "./containers/Home/_components/Login/modules/actions";
import PageNotFound from "./containers/PageNotFound/PageNotFound";
import { renderRoutesAdmin, renderRoutesHome } from "./routes";
import "./App.css";
import PopoverGlobal from "./components/Popover";
import CheckoutPage from "./containers/Home/CheckoutPage/CheckoutPage";

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actTryLogin(props.history));
    dispatch(actTryLoginHome(props.history));
  }, [dispatch, props.history]);

  return (
    <Suspense
      fallback={
        <>
          <Loader />
        </>
      }
    >
      <BackToTop />
      <PopoverGlobal />
      <MessageNotification />
      <ModalPopup />
      <Switch>
        {renderRoutesHome()}
        {renderRoutesAdmin()}
        <Route path="/checkout/customize/:id" component={CheckoutPage} />
        <Route path="/auth" component={AuthPage} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </Suspense>
  );
}

export default withRouter(App);
