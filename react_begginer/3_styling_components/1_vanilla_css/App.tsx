import ListGroup from './components/ListGroup/ListGroup';

function App() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  // Here we define the event handler we are going to use when an item gets clicked.
  // By convention we start with the word 'handle' and the we specify the type of event
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {/* Now we can pass parameters like attributes of HTML elements */}
      <ListGroup
        items={items}
        heading="cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
