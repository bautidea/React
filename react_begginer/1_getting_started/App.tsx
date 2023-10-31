import Message from './1_message';
// We deleted everything that was on this file and we created a new App component.
function App() {
  // Now we will add the created component
  return (
    <div>
      {/* Its important to close the component, if we dont we will get a compilation error. */}
      <Message />
    </div>
  );
}

// And just as the Message component we export the App component, so we can use it somewhere else.
export default App;
