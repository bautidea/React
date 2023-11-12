import axios, { AxiosError, CanceledError } from 'axios';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

function App() {
  // Lets see how we can delete data.
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

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

    return () => controller.abort();
  }, []);

  // Defining function for deleting the user
  const deleteUser = (user: User) => {
    // In this function we have two options:
    // - Optimistic Update: We update the UI first and then call the server to save changes,
    //   its optimistic because we are positive or optimistic that the call to the server is
    //   gonna succeed most of the time.
    //   With this approach the UI will be fast.
    // - Pessimistic Update: First we call the server and wait for the result, if the call is
    //   successful then we update the UI. We assume that the call to the server is going to
    //   fail.
    //   With this approach the UI is going to feel a bit slow.

    // Applying optimistic Update.
    // Declaring constant in the possible case that an error mighty occur, this const
    // has the original array, before filtering
    const originalUsers = [...users];

    setUsers(users.filter((u) => u.id !== user.id));

    // Here we are passing the id of the user thats going to be deleted.
    axios
      .delete('https://jsonplaceholder.typicode.com/users/' + user.id)
      .catch((err) => {
        setError(err.message);
        // If an error occurs then im setting the users back to original state.
        setUsers(originalUsers);
      });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
