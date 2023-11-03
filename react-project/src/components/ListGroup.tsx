import { useState } from 'react';
// What if we want to show another list, like a list of colors or names, we dont have to make
// another component for that, we can reuse this component.
// This is where we use props or properties, props are the inputs of our components.

// First we need to decide the shape of the input to this component, so we need to create an interface.

interface Props {
  items: string[];
  heading: string;
}

// Then we give this function a parameter, we pass the parameters we are going to use in the 'App.tsx' module.
// A good technique foe easy handling the parameter is to apply destructuring, instead of using a unique
// parameter 'props' we destructure it and keep each element { items, heading }
function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found </p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item}
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
