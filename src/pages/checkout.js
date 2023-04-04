import React from "react";
import {
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";

export default function Checkout({
  clearCart,
  addToCart,
  removeToCart,
  cart,
  subTotal,
}) {
  return (
    <div className="container m-auto">
      <h1 className="font-bold text-xl text-center"> Checkout</h1>
      <h1> 1.Delivary Details</h1>

      <div className="mx-auto flex">
        <div className="px-2 w-1/2 ">
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2 ">
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <label for="message" class="leading-7 text-sm text-gray-600">
        Address
      </label>
      <textarea
        id="message"
        name="message"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
      ></textarea>

      <h1> 2. review cart items</h1>
      <div className="    h-full  px-2 py-10 sidebar  bg-pink-100">
        <h2 className="font-bold text-xl text-center">Shoping Cart</h2>
        <span className=" cursor-pointer absolute right-0 top-0 text-2xl">
          <AiFillCloseCircle />
        </span>
        <div className="sideCart">
          <ol>
            { cart === null ?  Object.keys(cart)?.length === 0 && (
              <div className="my-4  text-base text-center">
                Your cart is emapty
              </div>
            ):"5d45wd4"}
            
             { cart === null ?  Object.keys(cart).map((item, index) => {
              return (
                <>
                  <li>
                    <div className="item flex my-5">
                      <div className="w-2/3 font-semibold">
                        {cart[item].name}
                      </div>
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
            }):""}
          </ol>
        </div>
        <div className="flex">
          <button
            onClick={clearCart}
            className="flex  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
          >
            clear cart
          </button>
        </div>
      </div>
    </div>
  );
}
