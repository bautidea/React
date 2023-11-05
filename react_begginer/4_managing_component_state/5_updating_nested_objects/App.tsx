import { useState } from 'react';

function App() {
  // Here we are using a state hook to create a customer object with a nested property
  // lets say as part of handling the click event, we want to update the zip code.
  const [customer, setCustomer] = useState({
    name: 'John',
    address: {
      city: 'San Francisco',
      zipCode: 94111,
    },
  });

  // One thing we need to know here is that the spread operator in JS is shallow, which
  // means when we use it to copy this customer object, its going to return the existing
  // object in memory, that means if we create two customer objects this way, both of them
  // are going to reference the same address object in memory, this is not what we want.
  // When we update states in react applications, we should make sure that our new state object
  // is completely independent of the existing state objects.

  // To solve this we need to set address to a new object
  const handleClick = () => {
    setCustomer({
      ...customer,
      address: {
        ...customer.address,
        zipCode: 94112,
      },
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
