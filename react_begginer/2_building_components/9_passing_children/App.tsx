import Alert from './components/Alert';

function App() {
  return (
    <div>
      {/* 
      Sometimes we want to pass children to a component, just like we are passing a ListGroup to this div element
      This way of passing text is not efficient
      //* <Alert text="Hello World" />
      What if we have  a long text or what if we want to pass HTML content, is better to pass text as a child to this component.
      */}
      <Alert>
        Hello <span>Wold</span>
      </Alert>
    </div>
  );
}

export default App;
