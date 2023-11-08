import React, { FormEvent, useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// As our form gets more complex we will end up with a lot of validation rules
// in that case its better to use a technique called schema based validation.
// There are various libraries that allow us to define all our validation rules
// in a single place, which we call a schema, we have:
// - Joi
// - Yup
// - Zod --> We are going to see basics. --> npm i @zod

// Using z we can define the shape or schema of our form and all validation rules,
// calling .object() and passing as argument an object with properties that represent
// our form fields.
// This is a configuration object that represents the shape of the form.
// We can pass an object with a message property
const schema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters.' }),
  age: z
    .number({ invalid_type_error: 'Age field is required.' })
    .min(18, { message: 'Age must be at least 18.' }),
});

// In zod we have a method that allow us to extract the type from a schema object, so we
// dont have to type the interface again.
// This will return a TS type.
type FormData = z.infer<typeof schema>;

const Form = () => {
  // To integrate react-hook-forms with zod we install --> npm i @hookform/resolvers
  // it includes resolvers for various data validation libraries.
  // And when calling the form hook we pass the configuration object, by calling the imported function
  // and we pass the schema object
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) }); //* --> Passing the interface

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
          {...register('name')}
          id="name"
          type="text"
          className="form-control"
        />
        {/*  
          With this technique we dont need a second <p> for error messages.
          We want to check for the existence of the property called name in the 
          errors object.
          We render dynamically the error msg, zod will generate error messages based 
          on the schema we defined at the beginning.
        */}
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register('age', { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
