// There are two ways of creating a React component we can use a JS class or a function.
// These days function based components have become more popular, because they are easy to write and more concise.
function Message() {
  // Here we should describe how the UI is going to look like when we use this component.
  // The syntax we are seeing here is called JSX, which is short for JavaScript XML, this code is going to get compiled to
  // JS
  //   With JSX we can easily describe the user interface of our application with HTML and JS.
  const name = 'Bauti';
  return <h1>Hello {name}</h1>;
}

// To use this we need to export it as a default object of this module, and the we go to the App component.
export default Message;
