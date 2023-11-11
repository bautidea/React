import axios from 'axios';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

function App() {
  // While calling the server many thing can go wrong, we should anticipate those problems and handle
  // them properly. In JS all promises have a method called '.catch()' we can use to catch errors.

  // Lets show a msg when we encounter an error while fetching data.
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      // We call the catch method and give it a call-back function, it will be executed if something
      // goes wrong while fetching the data.
      .catch((err) => setError(err.message));
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
