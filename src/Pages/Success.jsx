import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
    const location = useLocation()
    console.log(location)
  return (
    <div style={{height: "100vh", width: "100%",  display: "flex", alignItems: "center", justifyContent: "center", }}>
        <div style={{  padding: "10px",display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", height:"250px", width: "600px", backgroundColor:"lightgray", borderRadius:"5px" }}>
            <p style={{marginBottom: "15px", fontSize: "20px", color: "green"}}>Congratulation!! Your payment transaction is sucessfull</p>
            <button style={{backgroundColor: "blue", color: "white", padding: "15px",
             border: "none", borderRadius:"3px", fontWeight: "bold", fontSize:"18px"}}>Payment Successful</button>
        </div>
      
    </div>
  );
}

export default Success;
