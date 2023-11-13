// All hooks file name should start with the word 'use'.

import { useEffect, useState } from 'react';
import userService, { User } from '../services/user-service';
import { CanceledError } from '../services/api-client';

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // Now we are going to see how to create a custom hook, to share functionality
    // across all components, a hook is just a function, so we can move all the
    // logic of the effect hook into a custom hook or custom function.

    setLoading(true);

    const { request, cancel } = userService.getAll<User>();

    request
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

    return cancel;
  }, []);

  // Returning state variables so they can be used in our component.
  return { users, error, isLoading, setUsers, setError };
};

export default useUsers;
