import { useEffect, useState } from 'react';

// Function for connecting and disconnecting from chat server.
const connect = () => console.log('Connecting');
const disconnect = () => console.log('Disconnecting');

function App() {
  // Sometimes the effect the code that we pass to the effect hook doesnt need any cleanup.
  useEffect(() => {
    document.title = 'My App';
  });
  // But what if we need to change something once we complete a task, for example, if this would be
  // a chat component, and we were connecting to a chat server, at some point we need to disconnect
  // from the chat server.
  useEffect(() => {
    connect();

    // To provide clean up code, we return a function, and in this function we call our disconnect function
    return () => disconnect();
    // So the function we passed to the effect hook can optionally return a function for cleaning up.
    // This is not always necessary.
    //* Clean up functions should stop or undo whatever the effect was doing.
  });
  return <div></div>;
}

export default App;
