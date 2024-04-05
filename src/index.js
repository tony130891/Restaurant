if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

import "./styles.css";
import img from "../animal.png";
import * as menu from "./menu.js";
import * as home from "./home.js";
import * as about from "./About.js";

const content = document.querySelector("content");
const btnHome = document.querySelector(".btn-home");
const btnMenu = document.querySelector(".btn-menu");
const btnAbout = document.querySelector(".btn-about");

btnMenu.addEventListener("click", () => {
  content.replaceChildren(home, menu);
});

btnHome.addEventListener("click", () => {
  content.replaceChildren(menu, home);
});
