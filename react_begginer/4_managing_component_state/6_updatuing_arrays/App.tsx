import { useState } from 'react';

function App() {
  // So if we have an array, we should not mutate or change it. Instead, we should give
  // react a brand new array.
  const [tags, setTags] = useState(['happy', 'cheerful']);

  const handleClick = () => {
    // When our button gets clicked we want to add a new item to this array.
    // So we should call setTags and create a new array object, and use the spread operator
    // to spread the 'tags' Array, so we copy all the items in the original array into a new Array
    setTags([...tags, 'exciting']);

    // If we would like to remove an object. And we use the 'filter' method and we pass an arrow function
    // so we keep all tags except the one we want to remove.
    setTags(tags.filter((tag) => tag !== 'happy'));

    // If we would like to update an object, we have different ways to do this
    // - Create a new array and copy all the existing items, and then modify the new array.
    // - The other option is by using the map method.
    setTags(tags.map((tag) => (tag === 'happy' ? 'happiness' : tag)));
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
