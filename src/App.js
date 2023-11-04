import React from 'react';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
import { BrowserRouter as Router, Routes, Route, Navigate,  } from 'react-router-dom';
import Success from './Pages/Success';



const App = () => {

  const user = false;

  const RequireAuth = ({children}) => {
     return  user ? (children) : <Navigate to="/login"/>
  }


  return (
    <div> 
      <Router>
        <Routes>
          <Route exact path="/" element={ <Home/>} />
          <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>} />
          <Route path="/login" element={user ? <Navigate to="/"/> :<Login/>} />
          <Route path="/products/:category" element={<ProductList/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/success" element={<Success/>} />


        </Routes>
      
      </Router>
        
    </div>
  );
}

export default App;
