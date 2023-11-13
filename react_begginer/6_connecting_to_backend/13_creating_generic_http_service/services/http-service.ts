// In this service class is for managing post, the difference from this file
// compared to the others, is the endpoints and the objects that we sent to the
// server, here we are creating a generic HTTP service class that doesnt
// rely on the endpoints.
// Anywhere we have a reference to user, we should either remove that reference of make it
// generic.

import apiClient from './api-client';

// Defining a generic interface, we know that the passed objects will have an id of type num
// since we are using the id on the update method, we should create an interface, so the
// TS compiler know about the id property.
interface Entity {
  id: number;
}
class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // In the places where we had a reference to the User Interface, because we dont want this
  // class to be coupled to a particular interface, we should use a generic type parameter.
  // When we call this module we should pass the generic type parameter
  // like 'getAll<User>'.
  getAll<T>() {
    const controller = new AbortController();

    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  delete(userId: number) {
    return apiClient.delete(this.endpoint + '/' + userId);
  }

  add<T>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  update<T extends Entity>(entity: T) {
    return apiClient.patch(this.endpoint + '/' + entity.id, entity);
  }
}

// Now instead of exporting a instance of this class, we should export
// a function for creating an instance of this class.
// We do this so when we instance that class we can pass a parameter (the endpoint).
const create = (endpoint: string) => new HttpService(endpoint);

export default create;
