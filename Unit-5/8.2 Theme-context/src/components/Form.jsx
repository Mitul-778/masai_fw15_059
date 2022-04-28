import { useContext } from "react";
import './Form.css'

import { ThemeContext } from "../context/ThemeContext";

export const Form = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={theme} className="form">
      <h1>Details</h1>
      <form action="">
          <input type="text" placeholder="NAme"/>
          <input type="text" placeholder="Email" />
          <input type="number" placeholder="Age" />
          <select name="" id="">
              <option value="select Department">Select Department</option>
              <option value="">Science</option>
              <option value="">Arts</option>
              <option value="">Commerce</option>
          </select>
          <input type="submit"  />
      </form>
    </div>
  );
};
