import { useState } from 'react';

function App() {
  // Here we have an array of objects, each object has 3 properties.
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug 1', fixed: false },
    { id: 2, title: 'Bug 2', fixed: false },
  ]);

  // When our button is clicked, we want to mark a bug as fixed, so we want to update the array.
  // We dont need to create a brand new copy of every object that is on the array, only the object
  // that is supposed to be modified, by using the map method.
  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
