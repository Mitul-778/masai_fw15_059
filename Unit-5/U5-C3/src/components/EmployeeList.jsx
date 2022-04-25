import { Link } from "react-router-dom";

export const EmployeeList = ({list}) => {
    return (
      <div className="list_container">
        {/* On clicking this card anywhere, user goes to user details */}
       {list.map((el,i)=>{ return(
         <div className="employee_card" key={i}>
        <Link to={`/employees/${el.id}`}>
        <img className="employee_image" src={el.image}/>
         <span className="employee_name">{el.employee_name}</span>
         <span className="employee_title">{el.title}</span>
        </Link>
       </div> )
       })}
      </div>
    );
  };