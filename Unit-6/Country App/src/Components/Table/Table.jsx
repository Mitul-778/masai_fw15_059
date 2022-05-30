import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useDispatch, useSelector } from 'react-redux';
import { getCity,getCountry,Delete } from '../../Redux/Action'
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';


const StyledTableCell = styled(TableCell)(({ theme }) => ({

    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export function CustomizedTables() {
  const {city,country} = useSelector((store)=>store)
  const [cont,setCont] = useState('')
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCity())
    dispatch(getCountry())
  },[])

  const handleDelete = (e) =>{
    dispatch(Delete(e.id))
    dispatch(getCity())
  }

  return (
      <>
    <Box sx={{ marginTop:'20px', display: 'flex', alignItems:'center', justifyContent:'space-around'}}>
    <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
    <InputLabel style={{margin:'10px'}} id="demo-select-small">Select Country</InputLabel>
    <Select
        labelId="demo-select-small"
        id="demo-select-small"
        style={{margin:'10px'}}
        label="Country"
        name='country'
        onChange={(e)=>setCont(e.target.value)}
      >
        {country.sort((a,b)=> a.country>b.country ? 1 : a.country<b.country ? -1 :0).map((e)=>{
            return (<MenuItem key={e.id} value={e.country}>{e.country}</MenuItem>)
        })}
      </Select>
    </FormControl>
    <Button style={{height:'40px'}} variant="outlined">Sort Asc...</Button>
    <Button style={{height:'40px'}} variant="outlined">Sort Dsc...</Button>
    </Box>
    <TableContainer style={{marginTop:"50px"}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple-table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>ID</StyledTableCell>
            <StyledTableCell align="center">Country</StyledTableCell>
            <StyledTableCell align="center">City</StyledTableCell>
            <StyledTableCell align="center">Population</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {city.filter(e=>e.country.includes(cont)).map((e) => (
            <StyledTableRow key={e.id}>
              <StyledTableCell align='center' component="th" scope="row">
                {e.id}
              </StyledTableCell>
              <StyledTableCell align="center">{e.country}</StyledTableCell>
              <StyledTableCell align="center">{e.city}</StyledTableCell>
              <StyledTableCell align="center">{e.population}</StyledTableCell>
              <StyledTableCell align="center" >Edit</StyledTableCell>
              <StyledTableCell align="center"><Button onClick={()=>handleDelete(e)}  variant="outlined" startIcon={<DeleteIcon />}>
  Delete
</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
