import { note } from "./note";
import "./index.css"

const toDo = note("My task one to do");

const root=document.getElementById("root")
const p1 = document.createElement("h2");
p1.textContent = toDo;
p1.setAttribute("class","text")
root.append(p1) 