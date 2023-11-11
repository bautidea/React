import axios from 'axios';
import { useEffect, useState } from 'react';

// Interface to define the shape of the user, we are only interested in the
// first two properties.
interface User {
  id: number;
  name: string;
}

function App() {
  // Lets see how we can fetch data from the server, we are going to use a fake backend called
  // JSON placeholder --> https://jsonplaceholder.typicode.com/

  // To send a request to the server we can use:
  // - fetch(), function that is implemented in all modern browsers.
  // - axios, a library --> npm i axios

  // Using state hook for storing users.
  const [users, setUsers] = useState<User[]>([]);

  // Using Effect hook to call the server.
  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data));
    // Because calling the server is not gonna happen immediately, this method returns a 'promise'.
    //* 'Promise' is an object that holds the eventual result or failure of an asynchronous (long running)
    //* operation

    // All promises have a method called '.then', we pass a callback function that will get executed when
    // our 'promise' is resolved and the resolve is ready.
    // We pass as parameter a response object, in that object we have properties that inform and hold the data
    // of the request.
  }, []);
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App;
