if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

import "./styles.css";
import img from "../animal.png";
import { content as home } from "./home.js";
import { menu } from "./menu.js";
import { divAbout } from "./About.js";

const content = document.querySelector("#content");
const btnHome = document.querySelector(".btn-home");
const btnMenu = document.querySelector(".btn-menu");
const btnAbout = document.querySelector(".btn-about");

btnMenu.addEventListener("click", () => {
  content.replaceChildren(menu);
});

btnHome.addEventListener("click", () => {
  content.replaceChildren(home);
});

btnAbout.addEventListener("click", () => {
  content.replaceChildren(divAbout);
});
