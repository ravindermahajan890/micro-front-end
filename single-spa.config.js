import { registerApplication, start } from "single-spa";

registerApplication(
  // Name of our single-spa application
  "home",
  // Our loading function
  () => import("./src/home/home.app.js"),
  // Our activity function
  () =>
    location.pathname === "home/app1" ||
    location.pathname === "/home/app1" ||
    location.pathname.startsWith("/home/app1")
);

registerApplication(
  "home1",
  () => import("./src/home_1/home.app.js"),
  () =>
    location.pathname === "home/app2" ||
    location.pathname === "/home/app2" ||
    location.pathname.startsWith("/home/app2")
);

registerApplication(
  "navBar",
  () => import("./src/navBar/navBar.app.js").then(module => module.navBar),
  () => true
);

start();
