import { useState } from 'react';
// In real world apps, something should happen after we select an item, what happen is different
// from one app to another, so we dont want to implement that logic inside our component, because
// its not going to be a reusable component anymore.
// When an item is selected we should notify the app component that an item is selected.

// So if we look at our props object, we have two properties that we use to pass data to our list.
// We can add a third property which is going to be a function, and when we select an item we are going to call
// that function, and our app component will be notified.
interface Props {
  items: string[];
  heading: string;
  // By convention we start wth the word 'on', and then we specify the typo of event
  onSelectItem: (item: string) => void;
}

// Now when destructuring props, we should pick the 'onSelectItems' property, and then when selecting the
// item we should call this function.
function ListGroup({ items, heading, onSelectItem }: Props) {
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
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
