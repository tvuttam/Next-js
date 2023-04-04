import { Footer, Header } from "@/components";
import { useEffect, useState } from "react";
import "../styles/globals.css";
// import { json } from "stream/consumers";
// import Navbar from "../components/header/index";
// import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal,setSubTotal] = useState(0)

  useEffect(() => {
    try {
      if(localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
   
  }, [])

  const saveCart = (myCart) => {  
    localStorage.setItem("cart",JSON.stringify( myCart))
    let subt= 0 ;
    let keys = Object.keys(myCart);
    for (let i = 0; i < Object.keys(cart).length; i++) {
      
      subt += myCart[keys[i]]["price"] * myCart[keys[i]].qty ; 
    }
    setSubTotal(subt);
  } 
  
    const addToCart = (itemCode, qty, price, name, size, variant) => {
      let newCart = cart;
      if (itemCode in cart) {
        newCart[itemCode].qty = cart[itemCode].qty + qty;
      }

      else{
        newCart[itemCode] = { qty:1 ,price ,name,size,variant}
       }

      setCart(newCart);
      saveCart(newCart);
    }; 

  const removeToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    } 
   
    if(newCart[itemCode]["qty"]<=0){
      delete newCart[itemCode];
    }

    setCart(newCart);
    saveCart(newCart);
  }; 

   const clearCart = () => {
   setCart({})
   saveCart({})  
  };

  
  return (
    <>
      <Header key={subTotal} cart={cart}  saveCart={saveCart} clearCart = {clearCart} addToCart = {addToCart} removeToCart={removeToCart}  subTotal={subTotal}/>
      <Component saveCart={saveCart} clearCart = {clearCart} addToCart = {addToCart} removeToCart={removeToCart}  subTotal={subTotal}{...pageProps} />
      <Footer saveCart={saveCart} clearCart = {clearCart} addToCart = {addToCart} removeToCart={removeToCart} subTotal={subTotal} />
    </>
  );
}
 