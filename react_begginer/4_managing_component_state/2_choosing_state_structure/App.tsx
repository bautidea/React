import { useState } from 'react';
// Lets see a few best practices for choosing the state structure
function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // If we want to show a person full name, to do that we dont need to use the state hook
  // to declare another variable, we can simply declare a local variable
  const fulName = `${firstName} ${lastName}`;

  // Sometime our state variables are related, so its good to group them inside an object.
  const [dog, setDog] = useState({
    dogName: '',
    ownerName: '',
  });
  // We have to be aware that when using objects we dont have to go for a deep nested structure, like
  //* const [dog, setDog] = useState({
  //*   dogName: '',
  //*   ownerName: '',
  //*   contact: {
  //*     address: {
  //*       street: ''
  //*     }
  //*   }
  //* });
  return <div>{fulName}</div>;
}

export default App;
