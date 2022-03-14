import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, withRouter } from "react-router";
import "./App.css";
import BackToTop from "./components/BackToTop/BackToTop";
import Loader from "./components/Loader/Loader";
import AuthPage from "./containers/Admin/AuthPage/AuthPage";
import { actTryLogin } from "./containers/Admin/AuthPage/modules/actions";
import { actTryLoginHome } from "./containers/Home/_components/Login/modules/actions";
import PageNotFound from "./containers/PageNotFound/PageNotFound";
import { renderRoutesAdmin, renderRoutesHome } from "./routes";

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
      <Switch>
        {renderRoutesHome()}
        {renderRoutesAdmin()}
        <Route path="/auth" component={AuthPage} />
        <Route path="" component={PageNotFound} />
      </Switch>
    </Suspense>
  );
}

export default withRouter(App);
