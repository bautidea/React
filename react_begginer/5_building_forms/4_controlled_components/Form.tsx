import React, { FormEvent, useRef, useState } from 'react';

const Form = () => {
  // There is another way to get the value of input fields in a form, instead of the ref hook
  // we can use the state hook.
  //* With this approach, every time the use types or remove a character, because we are updating
  //* the state, our component is rerendered.
  // We define a person object and a function to update it.
  const [person, setPerson] = useState({
    name: '',
    age: 0,
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* 
          All input fields have a change event that is triggered every time the user types a keystroke,
          we can handle this event and update our state variables.
          In the onChange function we update the name property of the person object, to get the current
          value of the input field we give this function a parameter called event.

          All input fields in HTML have a value property for maintaining their own state, but here we have 
          a state variable ('person'), so its possible that these sources get out of sync.
          To solve this problem, we should make react the single source of true by setting 'value={person.name}'.

          We refer to these inputs as 'Controlled Component' because its state is entirely controlled by react,
          the value of the input field is not managed by the DOM, but instead is stored and updated in the 
          component state.
        */}
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          value={person.name}
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
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          value={person.age}
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
