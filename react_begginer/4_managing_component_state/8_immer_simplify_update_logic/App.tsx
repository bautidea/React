import { useState } from 'react';
import produce from 'immer';

function App() {
  // We can use the 'Immer' library to simplify our update logic --> npm i immer
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug 1', fixed: false },
    { id: 2, title: 'Bug 2', fixed: false },
  ]);

  // As before we want to mark the first bug as fixed.
  // We import the 'produce' function from immer. And we use this method when we use
  // the 'setBugs' function, we need to pass an arrow function.
  // By convention the parameter of that arrow function is called 'draft'.
  //* 'draft' is a proxy object that record the changes that we are going to apply to the array
  //* imagine draft is a copy of the array we are passing, we are free to mutate or modify that
  //* array just like regular JS object.
  const handleClick = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    // Here we are mutating the array just like a JS object.
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? 'Fixed' : 'New'}
        </p>
      ))}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
