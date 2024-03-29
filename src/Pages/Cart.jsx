import { Add, Home, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {mobile} from "../responsive"
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import {userRequest} from "../requestMethods";



const KEY = "pk_test_51O8OuiKg1MGPF9tMehdD8JMuwR2n0nEqjtkV29buAh2JfAxngcsyAFANr6DOLy3R8V3JsbWnLEtdPsGcqQF8zGwC001lOuVnvb"


const Container = styled.div``;
const Wrapper = styled.div`
   padding: 20px;
   ${mobile({padding: "10px"})}
`;
const Title = styled.h1`
   font-weight: 300;
   text-align: center;
`;
const Hmpage =styled.span`
  font-size: 15px;
  font-weight: bold;
  color: purple;
  cursor: pointer;
  margin-left: 10px;
`;
const  Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
${mobile({display: "none"})}
   
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
   display: flex;
   justify-content: space-between;
   ${mobile({flexDirection: "column"})}
`;
const Info = styled.div`
   flex: 3;
`;
const Product =styled.div`
   display: flex;
   justify-content: space-between;
  ${mobile({flexDirection: "column"})}
`;
const ProductDetail =styled.div`
   flex: 2;
   display: flex;
`;
const Image =styled.img`
   width: 150px;
   height: 200px;
`;
const Details =styled.div`
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`;
const ProductName =styled.span``;
const ProductId =styled.span``;
const ProductColor =styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props=>props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;
const ProductAmountContainer = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 20px;
`;
const ProductAmount = styled.div`
   font-size: 24px;
   margin: 5px;
   ${mobile({margin: "5px 15"})}
`;
const ProductPrice = styled.div`
   font-size: 30px;
   font-weight: 200;
   ${mobile({marginBottom: "20px"})}
`;

const Hr = styled.hr`
   background-color: #eee;
   border: none;
   height: 1px;
`;


const Summary = styled.div`
   flex: 1;
   border: 0.5px solid lightgray;
   border-radius: 10px;
   padding: 20px;
   height: 50vh;
`;

const SummaryTitle = styled.h1`
   font-weight: 200;
`;
const SummaryItem = styled.div`
   margin: 30px 0px;
   display: flex;
   justify-content: space-between;
   font-weight: ${props=>props.type === "total" && "500"};
   font-Size: ${props=>props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
   width: 100%;
   padding: 10px;
   background-color: black;
   color: white;
   font-weight: 600;
`;



const Cart = () => {
   const [stripeToken, setStripeToken] = useState(null)
   const [state, setState] = useState(null)
   const cart = useSelector((state)=>state.cart)
   const navigate = useNavigate()
    const onToken = (token) => {
      setStripeToken(token)
    }

    useEffect(()=>{
      const makeRequest = async () =>{
         try {
        const res = await userRequest.post("/checkout/payment", {
         tokenId: stripeToken.id,
         amount: cart.total * 100,
        })
        setState(res)
        navigate("/success", {state:{data: res.data}})
         } catch (error) {
             console.log(error)
         }
        
      }
    stripeToken &&  makeRequest()
    }, [stripeToken, cart.total, navigate])

    console.log(state)
    
  return (
    <Container>
      <Navbar state={state}/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR BAG<Link to="/"><Hmpage><Home style={{fontSize:"20px"}}/>Home</Hmpage></Link></Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                { cart.products.map((product)=>(<Product>
<ProductDetail>
    <Image src={product.img}/>
    <Details>
        <ProductName><b>Product:</b>{product.title}</ProductName>
        <ProductId><b>ID:</b>{product._id}</ProductId>
        <ProductColor color={product.color}/>
        <ProductSize><b>Size:</b>{product.size}</ProductSize>
    </Details>
</ProductDetail>
<PriceDetail>
    <ProductAmountContainer>
        <Add/>
        <ProductAmount>{product.quantity}</ProductAmount>
        <Remove/>
    </ProductAmountContainer>
    <ProductPrice>$ {product.price*product.quantity}</ProductPrice>
</PriceDetail>
</Product>))
                }
                
                <Hr/>
               
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>subtotal</SummaryItemText>
                    <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 6.50</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$ -6.50</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText >Total</SummaryItemText>
                    <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                </SummaryItem>
                {stripeToken ? (<span>Processing. Please wait...</span>) : (<StripeCheckout
                name = "Shoperpoint"
                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcAdbnIBGS-MGfzF26AmoCyvko0WVbua1P-KN4cheriw&s"
                 billingAddress
                 shippingAddress
                 description={`your total is $${cart.total} `}
                 amount={` ${cart.total*100} `}
                 token = {onToken}
                 stripeKey={KEY}
                >
                <Button>CHECKOUT NOW</Button>
                </StripeCheckout>)}
                
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  );
}

export default Cart;
