import { useState } from 'react';
// Importing the CSS file as an object, all the CSS classes defined in this file are going
// to be a property of the 'styles' object.
import styles from './ListGroup.module.css';

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found </p>}
      {/*
        //* To use the CSS styles we use dynamic typing, accessing the desired class as a property
        //* of the 'styles' object.
        We cannot access this property using the dot notation (styles.list-group), instead we have to use 
        square brackets notation.

        Or we can change in the CSS module and use camel notation.

        If we want to pass multiple classes we wrap them in an array, and joing each elements using an space
       */}
      <ul className={[styles.listGroup, styles.container].join(' ')}>
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
