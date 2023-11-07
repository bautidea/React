import React, { FormEvent, useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

const Form = () => {
  // We can use a library to quickly build forms with less code --> npm i react-hook-form
  // Using react-hook-form to get a form object, in this object we have a bunch of methods and
  // properties for programmatically controlling our forms.
  // Here we are using destructuring to get the register function and handleSubmit t handle form
  // submission.
  const { register, handleSubmit } = useForm();
  // React-hook-form uses reference objects to get values from input fields, there is no rerendering
  // involved here.

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    // To handle form submission we call the submit handler, and as argument, we give it a submit handler,
    // a submit handler is a function that receives data in this form.
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* 
          Instead of setting the onChange and value attributes, we are going to dynamically call 
          the register function , and give it a key.
          Since this function returns an object we spread it so all the properties from register
          get added to this input.
        */}
        <input
          {...register('name')}
          id="name"
          type="text"
          className="form-control"
        />
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
