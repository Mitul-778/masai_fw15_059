import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TerminatedContext } from "../context/TerminatedContext";
export const EmployeeDetails = () => {
  const {handleUpdate} = useContext(TerminatedContext)
  const { id } = useParams();
  const [user,setUser] = useState({});

  useEffect(()=>{
    getData();
  },[])

  const getData = () =>{
    axios.get(`http://localhost:8080/employee/${id}`).then(({data})=>{setUser(data)})
  }

  const handlePromo =()=>{
    console.log("hii")
    if(user.title==="intern"){
      setUser({...user, title:"Jr Software Developer"})
    }else if(user.title==="Jr Software Developer"){
      setUser({...user,title:"Sr Software Developer"})
    }else{
      setUser({...user, title:"Team Lead"})
    }
    console.log(user)
    getData()
  }
    return (
      <div className="user_details">
        <img className="user_image" src={user.image} />
        <h4 className="user_name">{user.employee_name}</h4>
        <span className="user_salary">${user.salary}</span>
        <span className="tasks">
          <li className="task">{user.tasks}</li>
        </span>
        Status: <b className="status">{user.status}</b>
        Title: <b className="title">{user.title}</b>
        {/* Show this button only if user is not already terminated (users status is working) */}
        {user.status==="working" ? <button className="fire" onClick={()=>{handleUpdate(1)}}>Fire Employee</button> : null}
        {/* Show this button only if user is not already team lead or terminated */}
        {user.title === "Team Lead" || user.status==="terminated" ? null :<button className="promote" onClick={()=>{handlePromo}}>promote</button>}

      </div>
    );
  };