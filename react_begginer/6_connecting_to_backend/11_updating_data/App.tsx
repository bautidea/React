import axios, { AxiosError, CanceledError } from 'axios';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

function App() {
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

  // Function for deleting a user.
  const deleteUser = (user: User) => {
    const originalUsers = [...users];

    setUsers(users.filter((u) => u.id !== user.id));

    axios
      .delete('https://jsonplaceholder.typicode.com/users/' + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  // Function for adding a user.
  const addUser = () => {
    const originalUsers = [...users];

    const newUser = { id: 0, name: 'Mosh' };

    setUsers([newUser, ...users]);

    axios
      .post('https://jsonplaceholder.typicode.com/users/' + newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  // Function for updating the user.
  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + 'Updated!' };

    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    // Now we have two options to call the server to save the changes.
    // - Use 'put' method, in HTTP we use the PUT method for replacing an object
    // - Use 'patch' method, we use the PATCH method for patching or updating one or more
    //   of its properties.
    // The method to choose depends on how the backend is build.

    // Using patch because we are only updating one property.
    // We need to pass the updated user in the body of the request.
    // If the call to the server is successful there is nothing extra we want to do.
    axios
      .patch(
        'https://jsonplaceholder.typicode.com/users/' + user.id,
        updatedUser
      )
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
