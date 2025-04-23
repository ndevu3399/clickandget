import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  
  // Calculate the total price of all items
  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  if (cart.length === 0) return <p>Your cart is empty 😢</p>;

  return (
    <div className="cart-container">
      <h1 className="title is-3 mb-5">Your Cart</h1>
      <div className="cart-items">
        {cart.map(item => (
          <CartItem 
            key={item.id} 
            item={item} 
            removeFromCart={removeFromCart} 
            updateQuantity={updateQuantity}
          />
        ))}
      </div>

      <hr />
      <div className="cart-summary">
        <p className="title is-5">Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}</p>
        <p className="title is-4">Total: ${total.toFixed(2)}</p>
        <button className="button is-primary is-fullwidth">Proceed to Checkout</button>
      </div>
    </div>
  );
}
