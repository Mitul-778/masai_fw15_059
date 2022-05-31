import { Button, TextField, InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry ,patchCity } from '../../Redux/Action'
import { useParams } from "react-router-dom";

export const EditCity = () => {
  const dispatch = useDispatch();
  const {id} = useParams()
  const {country} = useSelector((store)=>store)

  const [data, setData] = useState({
    city: "",
    population: 0,
    country: "",
  });

  useEffect(()=>{
    dispatch(getCountry())
  },[])

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(patchCity(data,id))
  }

  const handleChange=(e)=>{
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
}

  return (
    <FormControl sx={{ m: 1,minWidth: 150 }} size="small">
    <InputLabel style={{margin:'10px'}} id="demo-select-small">Select Country</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        style={{margin:'10px'}}
        label="Country"
        name='country'
        onChange={(e)=>handleChange(e)}
      >
        {country.sort((a,b)=> a.country>b.country ? 1 : a.country<b.country ? -1 :0).map((e)=>{
            return (<MenuItem key={e.id} value={e.country}>{e.country}</MenuItem>)
        })}
      </Select>
      <TextField style={{margin:'10px'}} onChange={(e)=>handleChange(e)} placeholder="Add City..." type='text' name='city' size="small"/>
      <TextField style={{margin:'10px'}} onChange={(e)=>handleChange(e)} placeholder="Population..." name='population' type='number' size="small"/>
      <Button style={{height:'40px',margin:'10px'}} onClick={(e)=>handleSubmit(e)} variant="outlined">Add City</Button>
    </FormControl>
  );
};
