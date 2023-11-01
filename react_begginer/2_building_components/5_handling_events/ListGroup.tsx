import { MouseEvent } from 'react';
function ListGroup() {
  // Lets see how we can handle click events in a component.
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  // In react each element has a property called 'onClick', inside it we can write an arrow function,
  // it can optionally have a parameter that represents the browser event.
  // The type of this object is 'SyntheticBaseEvent' its a built in class in react.

  // By convention all 'Event Handler' functions starts with the word 'handle' and then we specify the event.
  // We need to specify the type of the 'event' parameter so we get type safety and autocompletion, we need to import this
  // type from react.
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found </p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
