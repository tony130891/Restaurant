if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

import "./styles.css";
import img from "../animal.png";
import { menu } from "./menu.js";
import { home } from "./home.js";

const content = document.querySelector("#content");
const container = document.querySelector(".container");
const btnHome = document.querySelector(".btn-home");
const btnMenu = document.querySelector(".btn-menu");
const btnAbout = document.querySelector(".btn-about");

btnMenu.addEventListener("click", () => {
  content.remove();
});

btnHome.addEventListener("click", () => {
  content.remove();
});
