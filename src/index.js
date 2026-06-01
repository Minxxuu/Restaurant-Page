import "./output.css";
import renderHome from "./home.js";
import renderMenu from "./menu.js";
import renderAbout from "./about.js";

let homeBtn = document.getElementById("home");
let menuBtn = document.getElementById("menu");
let aboutBtn = document.getElementById("about");
homeBtn.className = "bg-blue-500 text-white p-2 rounded-lg border border-blue-700";
menuBtn.className = "bg-green-500 text-white p-2 rounded-lg border border-green-700";
aboutBtn.className = "bg-red-500 text-white p-2 rounded-lg border border-red-700";
document.getElementById("home").addEventListener("click", renderHome);
document.getElementById("menu").addEventListener("click", renderMenu);
document.getElementById("about").addEventListener("click", renderAbout);

renderHome();
