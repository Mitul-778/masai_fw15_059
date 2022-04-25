import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import { Routes , Route } from 'react-router-dom'
import { useState , useEffect } from 'react'
import axios from 'axios'

function App() {
  const [user,setuser] = useState({});
  useEffect(()=>{
    axios.get("http://localhost:8080/employee").then((res)=>setuser(res.data)).catch((err)=>console.log(err))
  },[])
  return (
    <div className="App">
      <Navbar />
      <Routes>{/* Routes here */}
        <Route path="/" element={ <Home total={user}/> }></Route>
        <Route path="/login" element={ <Login/> }></Route>
        <Route path="/employees" element={ <EmployeeList list={user}/> }></Route>
        <Route path="/employees/:id" element={ <ProtectedRoute><EmployeeDetails/></ProtectedRoute> }></Route>
        <Route path="/admin" element={ <ProtectedRoute><Admin/></ProtectedRoute> }></Route>
        <Route path="/logout" element={ <Logout/> }></Route>
      </Routes>
    </div>
  );
}

export default App;