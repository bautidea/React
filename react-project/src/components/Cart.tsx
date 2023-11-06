import React from 'react';

interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>item</li>
        ))}
      </ul>

      {/*  
        Adding a button to clear the cart. When the user clicks on this button, we are not going to 
        modify the object in this component. Because we need to treat Props as immutable or read only.
        We need to notify the App component that the user clicked on the clear button.

        //* The component that holds the state is the one responsible for updating it.
      */}
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;
