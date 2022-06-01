import React from "react";
import "./Style.css";
import Profile from "./Profile";
import TaskItem from "./Tasks";
import TaskItemInprogress from "./InProgress";
import TaskItemDone from "./Done";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className="Home">
        <div className="sideBar">
          <Profile />
        </div>
        <div className="toDo">
          <h1 className="headingNae1">ToDo</h1> <TaskItem />
        </div>
        <div className="inProgress">
          <h1 className="headingNae2">Inprogress</h1>
          <TaskItemInprogress />
        </div>
        <div className="done">
          <h1 className="headingNae3">Done</h1> <TaskItemDone />
        </div>
      </div>
    </div>
  );
};
