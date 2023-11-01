function ListGroup() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
  items = [];
  // We could render different contents based on certain conditions, for that we could use an if statement
  //* if (items.length === 0) {
  //*   return (
  //*     <>
  //*       <h1>List</h1>
  //*       <p>No item found</p>
  //*     </>
  //*   );
  //* }
  // But we are going to render things conditionally inside our JSX expression, but we cannot write an if statement
  // inside JSX. So we use {} its the only exception, with them we can render everything dynamically.

  // Here we use the ternary operator, if the condition if true we are returning a <p> element, otherwise we
  // return null, meaning nothing will be rendered.
  const message = items.length === 0 ? <p>No items found </p> : null;
  // We can create a function also, functions are better when we need to pass a parameter if not, its better
  // to use constants.
  const getMessage = () => {
    return items.length === 0 ? <p>No items found </p> : null;
  };
  return (
    <>
      <h1>List</h1>
      {message}
      {/* {getMessage()} */}
      {/* 
      Simplified expression
      //* {items.length === 0 && <p>No items found </p>} 
      */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
