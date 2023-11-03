import ListGroup from './components/ListGroup';

function App() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  return (
    <div>
      {/* Now we can pass parameters like attributes of HTML elements */}
      <ListGroup items={items} heading="cities" />
    </div>
  );
}

export default App;
