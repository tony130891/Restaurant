if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const btnHome = document.querySelector(".btn-home");
const btnMenu = document.querySelector(".btn-menu");
const btnAbout = document.querySelector(".btn-about");

console.log(btnAbout);
console.log(btnHome);
console.log(btnMenu);

import "./styles.css";
import img from "../animal.png";
import { container } from "./menu.js";
import { content } from "./home.js";
