import { useState } from 'react';

function App() {
  // We know that its better to group related variables inside an object.
  // When dealing with objects and arrays we should remember to treat them as immutable or
  // read only (just like Props).
  const [drink, setDrink] = useState({
    title: 'Americano',
    price: 5,
  });

  // So in this event handler we dont want to modify any of the properties of the drink object
  // (like drink.price = 6).
  //* To tell react about state updates, we have to give react a new object.
  // If we would have a more complex drink object, like one with 10 properties, we dont want to copy
  // all those properties, se we can use the spread operator.
  const handleClick = () => {
    const newDrink = {
      ...drink,
      price: 6,
    };
    //* const newDrink = {
    //*   title: drink.title,
    //*   price: 6,
    //* };

    setDrink(newDrink);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
