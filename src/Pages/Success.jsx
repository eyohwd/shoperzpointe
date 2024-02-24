import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


const Success = () => {
    const location = useLocation()
    
    const data =location.state.data 
    console.log(data)
  return (
    <div style={{height: "100vh", width: "100%", display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "center", }}>
        <div style={{  padding: "10px", marginBottom:"20px" ,display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", height:"100px", width: "400px", backgroundColor:"lightgray", borderRadius:"5px" }}>
            <p style={{marginBottom: "15px", fontSize: "15px", color: "green"}}>Congratulation!! Your payment transaction is sucessfull</p>
            <button style={{backgroundColor: "blue", color: "white", padding: "10px",
             border: "none", borderRadius:"3px", fontWeight: "bold", fontSize:"18px"}}>Payment Successful</button>
        </div>
        <div style={{width: "270px", padding:"20px", 
        display: "flex", flexDirection:"column",  height:"auto", border:"2px solid gray", borderRadius: "10px"}}>
         <h1 style={{marginBottom:"10px", fontSize:"20px", textAlign: "center"}}>Payment Reciept</h1>
          <div style={{fontSize:"16px", marginBottom:"10px", }}>
            <span style={{marginRight:"5px", fontWeight:"bold"}}>Name :</span>
            <span>{data.billing_details.name}</span>
          </div>
          <div style={{fontSize:"16px", marginBottom:"10px",}}>
            <span style={{marginRight:"5px", fontWeight:"bold"}}>Transaction-Id :</span>
            <span style={{fontSize:"16px"}}>{data.balance_transaction}</span>
          </div>
          <div style={{fontSize:"16px", marginBottom:"10px",}}>
            <span style={{marginRight:"5px", fontWeight:"bold"}}>Address :</span>
            <span>{data.billing_details.address.line1}</span>
          </div>
          <div style={{fontSize:"16px", marginBottom:"10px",}}>
            <span style={{marginRight:"5px", fontWeight:"bold"}}>Country :</span>
            <span>{data.billing_details.address.country}</span>
          </div>
          <div style={{fontSize:"16px", marginBottom:"10px",}}>
            <span style={{marginRight:"5px", fontWeight:"bold"}}>Amount :</span>
            <span>{data.amount}</span>
          </div>
        </div>
      
    </div>

  );
}

export default Success;
