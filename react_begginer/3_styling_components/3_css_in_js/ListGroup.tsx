import { useState } from 'react';
import styled from 'styled-components';

// We have another approach for styling our components called CSS-IN-JSS
// The idea is that we can write all the styles for a component next to its definition.
// in a JS or TS file.

// This give us a number of benefits
// - Scoped Styles - we are not going to run into name clashes or conflicts.
// - All CSS & JS/TS code in one place, this means that if tomorrow we might decide that we dont need
//   a component is much easier to delete that component (by deleting that file).
// - Easier to styled based on props/state.

// There are different libraries that implement this concept, the most populars are:
// - Styled components - using it this lesson.
// - Emotion
// - Polished

// Using the 'styled' objects we can create style components. By using style components, we no longer
// use 'className', instead, we create a react component that has all the styles.
const List = styled.ul`
  list-style: none;
  padding: 0;
`;

// Interface for active item.
interface ListItemProps {
  active: boolean;
}
// Applying interface.
const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? 'blue' : 'none')};
`;
// The return value of this is going to be a react component that has all these styles applied to it.
// Instead of using a regular HTML element we use that component.
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // We can implement this scenario of applying an active class dynamically using the index of the selected
  // item.
  // For that we give a prop of active to the 'ListItem' element, but to do this first we need to define the
  // shape of Props for this component using an interface.
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {/*  
      With these changes our JSX markup only represents the structure, all the styling is done on the top.
    */}
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found </p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
