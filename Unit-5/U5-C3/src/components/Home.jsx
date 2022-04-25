import { useContext, useEffect, useState } from "react";
import { NewContext } from "../context/NewContext"
import { PromotedContext } from "../context/PromotedContext"
import { TerminatedContext } from "../context/TerminatedContext"
import axios from "axios"

export const Home = ({total}) => {
 const { newcount } = useContext(NewContext)
 const { procount } = useContext(PromotedContext)
 const { tercount } = useContext(TerminatedContext)
    // create statistics for user.
    // get Total user count from DB,
    // other fields are in memory values stored in context API.
    // they will reset to 0
    // if page gets refreshed
  
    // thins to store in context api
    //   total: get from db,
    //   terminated: 0, // inc when user in terminated
    //   promoted: 0,// inc when user in promoted
    //   total_new: 0,// inc when a new user in created
  
    return (
      <>
        <h3 className="welcome">Welcome To employee management system</h3>
        <div className="home">
          <span>Stats</span>
          <div>
            Total Employees: <span className="totalemp">{total.length}</span>
          </div>
          <div>
            Total Terminated: <span className="total_terminated">{tercount}</span>
          </div>
          <div>
            Total Promoted: <span className="total_promoted">{procount}</span>
          </div>
          <div>
            Total New: <span className="total_new">{newcount}</span>
          </div>
        </div>
      </>
    );
  };