import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About/About';
import { useDispatch } from 'react-redux';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/Footer';
function App() {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const res = await fetch('https://mocki.io/v1/69156813-32cb-4272-90ea-023c1aba85bf');
    const data = await res.json();
    dispatch({
      type: 'SET_PRODUCTS',
      payload: data
    })
  }
  useEffect(() => {
    fetchProducts();
  }, [])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Home />} path='/'></Route>
        <Route element={<About />} path='/about'></Route>
        <Route element={<Products />} path='/products'></Route>
        <Route element={<SingleProduct />} path='/products/:id'></Route>
        <Route element={<Cart />} path='/cart'></Route>
        <Route element={<Login />} path='/login'></Route>
        <Route element={<SignUp />} path='/signUp'></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
