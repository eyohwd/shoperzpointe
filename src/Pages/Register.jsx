import { Home } from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from "../responsive";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.4)), url("https://img.freepik.com/free-photo/happy-good-looking-black-woman-wearing-grey-leather-coat-posing-beige-background-autumn-winter-fashion-concept_273443-127.jpg?w=2000");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper= styled.div`
   width: 40%;
   padding: 20px;
   background-color: white;
   ${mobile({width: "50%"})}
`;
const Form= styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Title= styled.h1`
   font-size: 24px;
   font-weight: 300;
   ${mobile({fontSize: "15px"})}


`;

const Hmpage =styled.span`
  font-size: 15px;
  font-weight: bold;
  color: purple;
  cursor: pointer;
  margin-left: 10px;
`;
const Input= styled.input`
   flex: 1;
   min-width: 40%;
   margin: 20px 10px 0px 0px;
   padding: 10px;
`;
const Agreement = styled.span`
   font-size: 12px;
   margin: 20px 0px;
`;
const Button = styled.button`
   width: 40%;
   border: none;
   padding: 15px 20px;
   background-color: teal;
   color: white;
   cursor: pointer;
   &:disabled{
    background-color: green;
    cursor: not-allowed
   }
`;

const Error = styled.span`
    color: red;
`;

const Register = () => {
  const {isFetching, error} = useSelector((state)=>state.user)
  const dispatch = useDispatch()
  
  const [data, setData] = useState({})
  
  const handleChange = (e) => {
     setData({...data, [e.target.name]: e.target.value})
  }
  
 // console.log(data)

  const handleRegister = (e) => {
      e.preventDefault()

      if (data.password !== data.cpassword){
        console.log(error)
      } else{
         register(dispatch, data)
      }
  }

 
  
  return (
    <Container> 

        <Wrapper>
            <Title>CREATE AN ACCOUNT<Link to="/"><Hmpage><Home style={{fontSize:"20px"}}/>Home</Hmpage></Link></Title>
             <Form>
               <Input type="text" name="name" placeholder="name" onChange={handleChange}/>
               <Input placeholder="last name" onChange={handleChange}/>
               <Input type="text" name="email" placeholder="email" onChange={handleChange}/>
               <Input type="text" name="username" placeholder="user name" onChange={handleChange}/>
               <Input type="password" name="password" placeholder="pass word" onChange={handleChange}/>
               <Input type="password" name="cpassword" placeholder="confirm password" onChange={handleChange}/>
               <Agreement>
                By creating an account, I consent to the 
                processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
               </Agreement>
               <Button disabled={isFetching} onClick={handleRegister}>CREATE</Button>
               {error && <Error>Wrong credentils...</Error>}
            </Form>
        </Wrapper>
      
    </Container>
  );
}

export default Register;
