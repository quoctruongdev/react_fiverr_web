import AdminTemplate from "../containers/Admin/AdminTemplate";
import HomeTemplate from "../containers/Home/HomeTemplate";
import { lazy } from "react";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: lazy(() => import("../containers/Home/HomePage/HomePage")),
  },
  {
    exact: false,
    path: "/search-job/:keyword",
    component: lazy(() =>
      import("../containers/Home/SearchJobPage/SearchJobPage")
    ),
  },
  {
    exact: false,
    path: "/login",
    component: lazy(() => import("../containers/Home/_components/Login/Login")),
  },
  {
    exact: false,
    path: "/join",
    component: lazy(() => import("../containers/Home/_components/Join/Join")),
  },
  {
    exact: false,
    path: "/about",
    component: lazy(() => import("../containers/Home/AboutPage/AboutPage")),
  },
  {
    exact: false,
    path: "/detail-job/:id/:userCreated",
    component: lazy(() => import("../containers/Home/DetailPage/DetailPage")),
  },
  {
    exact: false,
    path: "/list-type-job/:id",
    component: lazy(() =>
      import("../containers/Home/ListTypeJobPage/ListTypeJobPage.js")
    ),
  },
  {
    exact: false,
    path: "/total-job",
    component: lazy(() =>
      import("../containers/Home/TotalJobPage/TotalJobPage.js")
    ),
  },
  {
    exact: false,
    path: "/profile/:name",
    component: lazy(() => import("../containers/Home/ProfilePage/ProfilePage")),
  },
  {
    exact: false,
    path: "/search-error",
    component: lazy(() =>
      import("../containers/Home/_components/SearchNotFound/index")
    ),
  },
  {
    exact: false,
    path: "/categories/:name/:id/:subname/:subId",
    component: lazy(() =>
      import("../containers/Home/CategoriesSubPage/CategoriesSubPage")
    ),
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: lazy(() =>
      import("../containers/Admin/DashboardPage/DashboardPage")
    ),
  },
  {
    exact: false,
    path: "dashboard/users",
    component: lazy(() =>
      import("../containers/Admin/UsersManagement/UserManagement")
    ),
  },
];

function renderRoutesHome() {
  return routesHome.map((route, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        Component={route.component}
      />
    );
  });
}

function renderRoutesAdmin() {
  return routesAdmin.map((route, index) => {
    return (
      <AdminTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        Component={route.component}
      />
    );
  });
}

export { renderRoutesHome, renderRoutesAdmin };
