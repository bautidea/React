import React, { FormEvent, useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  // Let see how we can apply validation rules.
  // We add the property 'formState' to handle error of validation, we can use this object
  // to show validation msgs to the user.
  // We need to access the .error object, because probably the error object is going to be
  // repeated many times, its better to destructure 'formState'.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>(); //* --> Passing the interface

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // Here as a second argument of the register method we can pass an object, and
          // in it we can add the standard HTML attributes for data validations.
          //* React-hook-form only calls our handles function is the form is valid,
          // so we can show an error msg to the user.
          {...(register('name'), { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {/* 
          Displaying error, we are using optional chaining because our errors object can be empty 
          This expression is only evaluated if we have a name property.

          The TS Compiler is not aware of the input fields so we dont get autocompletion for errors 
          object. To improve this we can use an interface to define the shape of this form.
        */}
        {errors.name?.type === 'required' && (
          <p className="text-danger">The name field is required.</p>
        )}
        {errors.name?.type === 'minLength' && (
          <p className="text-danger">
            The name must be at least three characters.
          </p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register('age')}
          id="age"
          type="number"
          className="form-control"
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
