import Home from "../pages/home/home";

const mainRoutes = [
  {
    path: "/",
    isActive: false,
    exact: true,
    component: () => <Home />,
  },
  {
    name: "home",
    text: "Home",
    path: "/home",
    isActive: false,
    exact: true,
    component: () => <Home />,
  },
];

export default mainRoutes;
