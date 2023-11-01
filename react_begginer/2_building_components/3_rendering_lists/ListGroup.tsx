function ListGroup() {
  // To render a list dynamically, first we create an array.
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {/*  
        In JSX we dont have a for loop, so we have to use a different technique, in JS we have a method
      called 'map', for mapping or converting each item to an item of a different type.
        We can pass an arrow function, that converts each item to a <li> element, in JSX we use curly braces
      to render data dynamically.
        Also we need to wrap the full expression in braces so we dont get a compilation error, because in JSX
      we can only use HTML elements or other React components.
        //* When rendering a list of items using the map method, we should get each item a unique key.
    */}
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
