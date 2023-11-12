import axios, { AxiosError, CanceledError } from 'axios';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

function App() {
  // Let see how we can show a loading indicator while loading the data.

  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  // First we need to use the state hook to declare a state variable
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    // Just before we call the server we set loading to true
    setLoading(true);

    // There are two ways of setting the loader back to false, we should hide the loader
    // (setLoading(false)) when our promise is settled, whether is resolved or rejected.
    // - We can do it on the call back, when we got the result or when our promise get rejected.

    // When strict mode is enabled this is the only way to do it but the proper way to do this
    // using the 'finally' method.

    // All promises have a finally method, here we call a callback function, and it will get executed
    // always whether the promise is resolved or rejected.
    // One thing to mention is that this doesnt work with the strict mode on.
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    //* .finally(() => setLoading(false));

    //! setLoading(false);
    //! we cannot setLoading to false here because calling the server is an
    // asynchronous (non blocking) operation, so it wont block the execution
    // of our code but it will hide the loader and the code still will be
    // executing.

    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
