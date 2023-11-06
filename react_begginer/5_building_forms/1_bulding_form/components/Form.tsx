import React from 'react';

const Form = () => {
  return (
    // Here we are not returning a div, we return an HTML <form>
    // i created the above mark up by typing 'div.mb-3>label.form-label+input.form-control'
    <form>
      <div className="mb-3">
        {/*  
          Here we need to set the 'htmlFor' attribute to the ID of the input, so when the user clicks
          on the label, the input gets focused
        */}
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
