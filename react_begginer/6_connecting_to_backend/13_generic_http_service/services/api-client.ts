import axios, { CanceledError } from 'axios';

// In the services folder we are going to add basics modules that provide services
// or functionality to our application.
// Services is not about the UI they are about functionality.

// In this file im going to create a new access client with a custom configuration.
export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  // We can optionally set the HTTP headers, and these headers will be passed with
  // every HTTP request.
  //* headers: {
  //*     'api-key' : '...'
  //* }
  //   We dont have this requirement.
});

// Exporting it as a name object
export { CanceledError };
