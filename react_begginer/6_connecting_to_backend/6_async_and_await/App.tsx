import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

  // We can rewrite the way of handling promises, there is another way more linear, using
  // Async and Await.
  // In JS if we have a promise, we can put the await keyword in front of a promise to get the result.

  useEffect(() => {
    // To use the await keyword here we have to mark the containing function as async, if not we are going
    // to get a compilation error on the 'await' keyword.

    // We are going to define an async function inside this function to make the function async, because
    // React doesnt allow us to pass an async function to the effect hook.
    const fetchUsers = async () => {
      // To catch an error that might happen we need to wrap this lines with a try catch block.
      try {
        const res = await axios.get<User[]>(
          'https://jsonplaceholder.typicode.com/users'
        );

        setUsers(res.data);
      } catch (err) {
        // And we catch the error, and we pass the msg to error state.
        // Type annotations are not allowed in a catch clause, we need to specify the type of 'err'
        // using the 'as' keyword when setting the error msg.
        setError((err as AxiosError).message);
      }
    };

    // Now we call it.
    fetchUsers();
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
