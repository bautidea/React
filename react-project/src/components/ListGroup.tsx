import { useState } from 'react';

function ListGroup() {
  // Now when we click on a item on the List Group we are going to high light it.
  // To do this we have a CSS class in Bootstrap 'active'.
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  // And we need a variable to keep track of the selected items, initialized to -1,
  // so no item is selected.
  //* let selectedIndex = -1;
  // Since this variable is assigned locally to the function component, we cannot pass
  // it to an element dynamically, so we need to tell react that the component is going
  // to have an state, that is going to change over time, to do that we use a built in function

  //* Hook (called 'state hook') - Function that allow us to tap into built in functions in React.
  // 'useState' returns an array with two elements.
  //* arr[0]; First element a variable like 'selectedIndex'
  //* arr[1]; Second element an 'updater function'. By using it we can update the variable.
  // Restructuring array into two elements, by convention the first element is a variable called
  // a state variable (can have any name) and the second is a function that must have the
  // prefix 'set' followed by the variable name.
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found </p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            // We are going to render selected variable dynamically.
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
            // Here we are assigning a new value to the 'selectIndex' variable, using the function
            // 'setSelectedIndex'.
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
