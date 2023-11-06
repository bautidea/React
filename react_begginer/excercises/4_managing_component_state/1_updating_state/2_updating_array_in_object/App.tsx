import { useState } from 'react';

// When the user clicks a button we are going to add a new topping to the toppings array.
function App() {
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom'],
  });

  const handleClick = () => {
    const newTopping = {
      ...pizza,
      toppings: [...pizza.toppings, 'Cheese'],
    };

    setPizza(newTopping);
  };

  return (
    <div>
      <p>{pizza.name}</p>
      <ul>
        {pizza.toppings.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Add Topping</button>
    </div>
  );
}

export default App;
