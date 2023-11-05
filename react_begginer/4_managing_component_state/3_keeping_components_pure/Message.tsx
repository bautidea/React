// Purity is a fundamental concept in React.
// A pure function is a function that given the same input, it always returns the same result.
// But if we get different results at different times, we say that function is impure.

// React is designed around this concept, it expects every component we create to be a pure
// function, so with the same input (props) we should expect the same result (JSX).
// This is for performance reasons, if the inputs of a component havent change, reacts can
// skip re-rendering that component.

// So to keep components pure we should keep changes out of render phase.

// If we let this variable here, each time this component gets called we will obtain a different
// result.
//* let count = 0;
// So to keep our components pure we should keep changes out of the render phase, we should not change
// any objects that existed before rendering.
const Message = () => {
  // Its totally fine to update an object that we create as part of rendering, like if we move the count variable
  // to this function, we are declaring the count variable as part of rendering.
  let count = 0;
  count++;
  return <div>Message {count}</div>;
};

export default Message;
