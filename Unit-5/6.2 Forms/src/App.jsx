import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import { Form } from './components/Form'

function App() {
  const [details,setdetails]= useState([])
  useEffect(()=>{
   getData()
  },[])

  const getData=()=>{
    axios.get("http://localhost:8080/data")
    .then(function (response) {
      setdetails(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  
  return (
    <div className="App">
      <Form getData={getData}/>
      <table  className="table">
        <thead>
          <tr >
            <th>First Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Marital state</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
          {details.map((e) => (
            <tr  key={e.id} className="row">
              <td className="first_name">{e.username}</td>
              <td className="last_name">{e.age}</td>
              <td className="email">{e.address}</td>
              <td className="gender">{e.department}</td>
              <td className="age">{e.salary}</td>
              <td className="tenth_score">{e.marital_state}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default App
