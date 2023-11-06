import React, { FormEvent } from 'react';

const Form = () => {
  // To handle form submission we go to our form element and handle the 'onSubmit' event the same way
  // we handle the 'onClick' event of buttons.

  // By default when we submit an HTML form, that form is posted to the server, so we get a full page
  // reload, to solve this problem, we need to prevent this default behavior.
  // We do this by giving the function a parameter, like event, we will get a compilation error because
  // the TS compiler doesnt know the type of event parameter, so we need to annotate this with the type.
  const handleSubmit = (event: FormEvent) => {
    // The first thing to do is call 'preventDefault()' on event, so we can prevent this form from being posted
    // to the server.
    event.preventDefault();
    // And then we can do what we want.
    console.log('Submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input id="age" type="number" className="form-control" />
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
