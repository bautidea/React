import axios, { AxiosError, CanceledError } from 'axios';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

  // As a best practice when we fetch data in an effect we should also provide a cleanup
  // function for cancelling the fetch request, in case the data is no longer needed.
  useEffect(() => {
    // To do that we create an object called controller and set it to an instance of the
    // built-in class 'AbortController', this class allow us to cancer or abort
    // asynchronous operations, like fetch request DOM manipulations or any operation that might
    // take a long time to complete.
    const controller = new AbortController();

    // When we call the get method as a second argument we pass a request configuration object,
    // we set the signal property
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      // Here we added a block of code so the error msg only display when there error is not instance of 'CanceledError'
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    // And we return a clean up function.
    return () => controller.abort();
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
