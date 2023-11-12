import apiClient from './api-client';

// The App component should only focus on his primary responsibility (returning
// some markup adn handling user interactions), no on handling HTTP requests, so we
// should create a file, or service, to handle all the logic around making HTTP requests.
// It help us to separate concerns and make our code more modular and reusable.

// The proper place to have that interface is in this file because here we have all the
// functionality for working with users.
// But because we need to use this in out App component we need to export it.
export interface User {
  id: number;
  name: string;
}

// We create a class in which we are going to have methods for creating, updating, and deleting
// a user.
class UserService {
  getAllUsers() {
    const controller = new AbortController();

    // I just brought the pice of code in where we sent the GET request to users end point
    // Here we need to have access to the User interface, so we dont get a compilation error.
    const request = apiClient.get<User[]>('/users', {
      signal: controller.signal,
    });

    // At the end we should return an object with two properties, because in the App module we need
    // access to the controller object, we dont want to export from this module, because the controller
    // is used to handle HTTPs requests, its not related to App module.
    return { request, cancel: () => controller.abort() };
    // So when we use this method we simply use the cancel method (or cancel button) to cancel a request.
  }

  deleteUser(userId: number) {
    return apiClient.delete('/users/' + userId);
  }

  addUser(newUser: User) {
    return apiClient.post('/users', newUser);
  }

  updateUser(updatedUser: User) {
    return apiClient.patch('/users/' + updatedUser.id, updatedUser);
  }
}

// Then we export a new instance of this class as a new instance
export default new UserService();

// With these changes we have separation of concerns, our code is more modular and reusable.
// We can reuse the user service anywhere we need to get users, create them update them and so on.
