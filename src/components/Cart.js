import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold"> Cart</h1>
      <div className="w-6/12 m-auto">
      <button className="filter-btn px-2 py-2 bg-gray-200 m-4 rounded-2xl border border-solid hover:bg-gray-400" 
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItem.length == 0 && <h1> YOUR CART IS EMPTY. Select your favourite cousine!</h1>}
        <ItemList items={cartItem}/>
      </div>
    </div>
  );
};

export default Cart;
