// App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cart from './Components/Cart';
import CartDetails from './Components/CartDetails';
import Layout from './Components/Layout';
import WishList from './Components/WishList';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import { Login } from './Pages/Login';
import { Signup } from './Pages/Signup';
import Blog from './Pages/blog'; // Import the Blog component

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} /> {/* Add this route */}
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/product/:id" element={<CartDetails />} />
      </Routes>
    </>
  );
}

export default App;
