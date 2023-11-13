// Importing the create function from the http module.
import create from './http-service';

export interface User {
  id: number;
  name: string;
}

// Now here we call the create function, and pass the endpoint,
// this the only place where we provide the endpoint
export default create('/users');
