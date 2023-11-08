import styled from "styled-components";
import {mobile} from "../responsive"
import { Link as Hink} from "react-router-dom";
import { Home } from "@material-ui/icons";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

 const Container = styled.div`
   width: 100vw;
   height: 100vh;
   background: linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3)), url("https://shop-present.com/wp-content/uploads/2022/01/Shopping-7.jpg");
   background-size: cover;
   display: flex;
   align-items: center;
   justify-content: center;
 `;
 
 const Wrapper= styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({width: "75%"})}
 `;
 const Form= styled.form`
   display: flex;
   flex-direction: column;

 `;
 const Title= styled.h1`
    font-size: 24px;
    font-weight: 300;
 
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
    margin: 10px 0px;
    padding: 10px;
 `;
 
 const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
      color: green;
      cursor: not-allowed;
    }
 `;

 const Error = styled.span`
    color: red;
 `;
 
  const Link= styled.a`
   margin: 5px 0px;
   font-size: 12px;
   text-decoration: underline;
   cursor: pointer;
  `;
 const Login = () => {
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")

   const dispatch = useDispatch()
   const {isFetching, error} = useSelector((state) => state.user)

   const handleLogin = (e) => {
      e.preventDefault();
      login(dispatch, {username, password}) 
   };
   return (
     <Container>
         <Wrapper>
             <Title>SIGN IN<Hink to="/"><Hmpage><Home style={{fontSize:"20px"}}/>Home</Hmpage></Hink></Title>
              <Form>
                <Input placeholder="username" 
                onChange={(e)=> setUsername(e.target.value)}
                />
                <Input placeholder="password" 
                type="password"
                onChange={(e)=> setPassword(e.target.value)}
                />
                
                
                <Button onClick={handleLogin} disabled={isFetching}>LOGIN</Button>
               {error && <Error>Wrong username or password...</Error>}
                <Link>YOU DO NOT REMEMBER YOUR PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT NOW AND ENJOY OUR SERVICES</Link>
             </Form>
         </Wrapper>
       
     </Container> );
}

export default Login;
