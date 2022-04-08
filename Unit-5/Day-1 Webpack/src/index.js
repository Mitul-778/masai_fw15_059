import { note } from "./note";
import "./index.css";
import image from "../todo.png";

var root = document.getElementById("root");
const imag = document.getElementById("img");
imag.src = image;
root.append(imag);

const butn = document.getElementById("submit");

butn.addEventListener("click", () => {
  const list = document.getElementById("text").value;
  const toDo = note(list);
  const p1 = document.createElement("h2");
  p1.textContent = toDo;
  p1.setAttribute("class", "text");
  root.append(p1);
});
