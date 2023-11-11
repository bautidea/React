// Before connecting React to the backend we need to understand hot to use the effect hook

import { useEffect, useRef } from 'react';

// With the effect hook we can tell react to execute a piece of code after a component is rendered.
function App() {
  // Lets say when the app start we want to put focus on the input, to do this first we need to use
  // the ref hook to get a reference to this input field.
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // We check if ref.current is defined, if it is we focus it.
    if (ref.current) ref.current.focus;
  });
  // Here we use the 'useEffect' hook because
  //*  if (ref.current) ref.current.focus;
  // This piece of code has a side effect, its changing something outside of this component (the state
  // of the DOM), so now our component is no longer a pure component, to make this pure we can use the
  // effect hook.

  // The function that we pass to useEffect will be called after each render, we can use this to write
  // code that causes side effect.

  //* Just as like the state and ref hooks we can only call the effect hook at the top level of our components
  //* we cannot call it inside loops or if statements, and also we can call it multiple times for different
  //* purposes.

  useEffect(() => {
    document.title = 'My App';
  });

  // When we have multiple effects, react will run them in order after each render.
  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default App;
