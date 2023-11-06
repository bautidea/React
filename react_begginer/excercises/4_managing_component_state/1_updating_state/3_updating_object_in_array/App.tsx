import { useState } from 'react';

// When the user clicks a button we want to change the the quantity of product 1 to two.
function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: 'Product 1', quantity: 1 },
      { id: 2, title: 'Product 2', quantity: 1 },
    ],
  });

  const handleClick = () => {
    const newQuantity = {
      ...cart,
      items: cart.items.map((product) =>
        product.id === 1
          ? { ...product, quantity: product.quantity + 1 }
          : product
      ),
    };

    setCart(newQuantity);
  };

  return (
    <div>
      <p>Items</p>
      <ul>
        {cart.items.map((product) => (
          <li key={product.id}>
            title = {product.title} quantity = {product.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Add Quantity</button>
    </div>
  );
}

export default App;
