import React, { useRef } from "react";
import Image from "next/image";
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiAccountCircleFill } from "react-icons/ri";
import {} from "react-icons/ai";
import Link from "next/link";

export default function Header({
  saveCart,
  clearCart,
  addToCart,
  removeToCart,
  subTotal,
  cart,
}) {
  
  const ref = useRef();


  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center sticky top-0 bg-white z-10">
      <div className="logo mx-5">
        <Image src="/logo.png" width={100} height={100} alt="kjdkrf" />
      </div>
      <div className="nav my-auto  space-x-2 py-2 text-xl">
        <ul className="flex space-x-2">
          <Link href={"/tshirt"}>
            <li>Tshirtsv</li>{" "}
          </Link>
          <Link href={"/hoddie"}>
            <li>Hodies</li>
          </Link>

          <li>Stickers</li>
          <li>Mugs</li>
        </ul>
      </div>
      <div
        onClick={toggleCart}
        className="cursor-pointer absolute right-0 mx-5 text-xl md:text-3xl"
      >
        {" "}
        <AiOutlineShoppingCart />
      </div>
      <Link href={"/login"}>
        {" "}
        <RiAccountCircleFill className="text-xl absolute right-20" />{" "}
      </Link>
      <div
        ref={ref}
        className=" w-72 h-[100vh] transform transition-transform translate-x-full  px-2 py-10 sidebar absolute top-0 right-0 bg-pink-100"
      >
        <h2 className="font-bold text-xl text-center">Shoping Cart</h2>
        <span
          onClick={toggleCart}
          className=" cursor-pointer absolute right-0 top-0 text-2xl"
        >
          <AiFillCloseCircle />
        </span>
        <ol>
          {Object.keys(cart)?.length === 0 && (
            <div className="my-4  text-base text-center">
              Your cart is emapty
            </div>
          )}
          {Object.keys(cart).map((item, index) => {
            return (
              <>
                <li>
                  <div className="item flex my-5">
                    <div className="w-2/3 font-semibold">{cart[item].name}</div>
                    <div className="mx-2 text-sm">
                      {" "}
                      <AiFillMinusCircle
                        onClick={() => {
                          removeToCart(
                            item,
                            1,
                            cart[item].price,
                            cart[item].name,
                            cart[item].size,
                            cart[item].variant
                          );
                        }}
                        className="cursor-pointer text-pink-500"
                      />
                      <span>{cart[item].qty}</span>{" "}
                      <AiFillPlusCircle
                        onClick={() => {
                          addToCart(
                            item,
                            1,
                            cart[item].price,
                            cart[item].name,
                            cart[item].size,
                            cart[item].variant
                          );
                        }}
                        className="cursor-pointer text-pink-500"
                      />
                    </div>{" "}
                  </div>
                </li>
              </>
            );
          })}
        </ol>
        <div className="flex">
          <Link href={"/checkout"}>
            {" "}
            <button className="flex  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
              checkout
            </button>
          </Link>
          <button className="flex  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
            clear cart
          </button>
        </div>
      </div>
    </div>
  );
}
