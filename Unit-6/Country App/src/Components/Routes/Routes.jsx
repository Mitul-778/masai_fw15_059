import { Routes, Route } from "react-router-dom";
import { CustomizedTables } from '../Table/Table'
import { City } from '../AddCity/AddCity'
import { Country } from '../AddCountry/AddCountry'
import { EditCity } from '../EditCity/EditCity'

export const AllRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<CustomizedTables/>}></Route>
            <Route path='/add-city' element={<City/>}></Route>
            <Route path="/add-country" element={<Country/>}></Route>
            <Route path='/city/:id' element={<EditCity/>}></Route>
        </Routes>
    )
}