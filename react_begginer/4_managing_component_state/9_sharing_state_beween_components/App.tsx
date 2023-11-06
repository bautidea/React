import { useState } from 'react';
import produce from 'immer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';

function App() {
  // Sometimes we need to share state between components, for example in a shopping app as we are
  // adding items to the cart, we need to be updating the shopping cart and displaying the amount of selected
  // items in a nav bar.

  // To share the state between the NavBar and the cart, we have tro lift the state up to the closest parent,
  // most of the times is App component, once we have the state in the App component we can share it with his
  // childrens using Props.

  const [cartItems, setCartItems] = useState(['Product1', 'Product2']);
  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      {/*  
        Because here is where me maintain the state, all the updates should be done in this component.
      */}
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default App;
