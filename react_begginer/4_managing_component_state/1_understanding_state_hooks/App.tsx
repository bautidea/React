import { useState } from 'react';

// By suing a state hook we can add a state to a component. There are a few thing we have to know about
// state hook:
// - React updates state asynchronously. The update is not applied immediately, in the 'handleClick' event
//   we are going to see in the log 'false'. So performance reasons, reacts takes all the updates and applies
//   them after the event handler 'handleClick' finish the execution.
// - State is stored outside of components, this is because the variables that we declare inside a function are
//   scoped to that function, so when this components finishes the execution the local variables are going to be
//   removed from the memory.
// - We can only use hook at the top level of the component.
function App() {
  const [isVisible, setVisibility] = useState(false);

  const handleClick = () => {
    setVisibility(true);
    console.log(isVisible);
  };

  return (
    <div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
}

export default App;
