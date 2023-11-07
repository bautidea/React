import React, { FormEvent, useRef } from 'react';

const Form = () => {
  // In React we have another built in hook called 'useRef', we can use it to reference a DOM element.
  // We are going to see how we can use this hook to reference an input field and read its value
  // when the form is submitted.

  // We give this function an initial value, the common practice is to pass null.
  // This hook will return a reference object.
  // We can use the ref hook to reference any kind of element in the DOM, buttons, heading, list, so on,
  // so we need to tell the TS compiler that we are referencing an HTML input element.
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  // Then we need to associate the reference object with the corresponding input.

  // Creating object to pass to server
  const person = { name: '', age: 0 };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // The reference object has a single property '.current' this will return the DOM element we are referencing.
    // --> <input ref={nameRef} id="name" type="text" className="form-control" />.
    console.log(nameRef.current);

    // We know that all in HTML all input fields have a value property. We need to do a null check because TS compiler
    // is complaining that 'nameRef.current' is possibly null.
    if (nameRef.current !== null) console.log(nameRef.current.value);
    if (ageRef.current !== null) console.log(ageRef.current.value);

    // When submitting a form we need to send an object to the serer to be saved, so instead of logging individual values
    if (nameRef.current !== null) person.name = nameRef.current.value;
    // Since '.current.value' returns a string we need to parse the value to an int, because age is a number.
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);

    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* Referencing the reference object */}
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
