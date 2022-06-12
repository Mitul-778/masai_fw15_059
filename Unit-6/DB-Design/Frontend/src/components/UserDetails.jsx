import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const [data, setData] = useState([]);
  const [orders, setOrder] = useState([]);
  const { id } = useParams();
  const { order,amount } = orders;
  


  useEffect(() => {
    async function getData(){
        const res = await fetch(`http://localhost:8080/order/${id}`);
        const d = await res.json();
        setOrder(d)
   }
   getData()
   async function getOrder(){
    const res = await fetch(`http://localhost:8080/users/${id}`);
    const d = await res.json();
    setData(d.user)
   }
   getOrder()
  },[data,orders]);
 
  return (
    <>
    <div id="order">
      <table>
        <thead>
        <h1>User Details :</h1>
            <tr>
                <td>Key</td>
                <td>Value</td>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>First Name :</b>
            </td>
            <td>{data.firstName}</td>
          </tr>
          <tr>
            <td>
              <b>Last Name :</b>
            </td>
            <td>{data.lastName}</td>
          </tr>
          <tr>
            <td>
              <b>Email :</b>
            </td>
            <td>{data.email}</td>
          </tr>
          <tr>
            <td>
              <b>Mobile :</b>
            </td>
            <td>{data.mobile}</td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
        <h1>Orders :</h1>
            <tr>
                <td>Product Name</td>
                <td>Product Image</td>
                <td>Price</td>
            </tr>
        </thead>
        <tbody>
            {order[0].productIds.map((e)=>(
                <tr>
                    <td>{e.name}</td>
                    <td><img src={e.image} alt="" /></td>
                    <td>Rs.{e.price}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
    <h4>Total Amount Spend : Rs.{amount}</h4>
    </>
  );
};
