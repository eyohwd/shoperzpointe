import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive"
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import ShowOnLogin from './hiddenLinks';
import { ShowOnLogout } from './hiddenLinks';


const Container = styled.div`
height: 60px;
${mobile({height: "50px"})}
`;
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
${mobile({padding: "10px 0px"})}
`;
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;
const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display: "none"})}
`;
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;
const Input = styled.input`
border: none;
${mobile({width: "45px"})}
`;
const Center = styled.div`
flex: 1;
text-align: center;
`;
const Logo = styled.h1`
font-weight: bold;
text-align: center;
${mobile({fontSize:"15px"})}
`;
const Right= styled.div`
flex: 1;
display: flex;
align-item: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center"})}
`;
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({fontSize: "9px", marginLeft: "5px"})}
&:hover{
  border-bottom: 1px solid blue;
}
`;


const Button = styled.button`

border: none;
background-color: teal;
margin-left: 25px;
padding: 5px;
color: white;
cursor: pointer;
text-align: center;
&:hover{
background-color: green;}
${mobile({fontSize: "9px", marginLeft: "5px", padding: "0px 2px", height: "15px"})}

`;


const Navbar = () => {
  const dispatch = useDispatch()

  const logoutUser = () => {
    localStorage.removeItem("user")
    dispatch(logout())

  }
 const quantity = useSelector((state)=>state.cart.quantity)
  
  return (
    <Container>
     <Wrapper>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input placeholder="search"/>
          <Search style = {{color:"gray", fontSize: 16}}/>
        </SearchContainer>
        </Left>
      <Center><Logo>SHOPERPOINT.</Logo></Center>
      <Right>
      <Link to="/" style={{textDecoration:"none"}}>
      <MenuItem>HOME</MenuItem>
      </Link>
      
      <ShowOnLogout>
      <Link to="/register" style={{textDecoration:"none"}}>
      <MenuItem>REGISTER</MenuItem>
      </Link>
      </ShowOnLogout>

      <ShowOnLogout>
      <Link to="/login" style={{textDecoration:"none"}}>
      <MenuItem>SIGN IN</MenuItem>
      </Link>
      </ShowOnLogout>
      
      <ShowOnLogin>
      <Button onClick={logoutUser}>
      LOGOUT
      </Button>
      </ShowOnLogin>
     
      <Link to="/cart">
        <MenuItem>
        <Badge badgeContent={quantity} color="primary">
      <ShoppingCartOutlined />
    </Badge>
        </MenuItem>
        </Link>
      </Right>


     </Wrapper>
    </Container>
  );
}

export default Navbar;
