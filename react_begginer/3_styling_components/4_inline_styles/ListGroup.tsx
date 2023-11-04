import { useState } from 'react';

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {/*  
        We can also use inline styles for styling our components, but they are not recommended because they make
        the code hard to read and maintain, they should be used in special cases.

        All the CSS attributes are named different, instead of using hyphen notation, the attributes are named
        using camel notation.
      */}
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found </p>}
      <ul style={{ backgroundColor: 'yellow' }}>
        {items.map((item, index) => (
          <li
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
