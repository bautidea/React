import React, { useEffect, useState } from 'react';

const ProductList = ({ category }: { category: string }) => {
  const [Products, setProducts] = useState<string[]>([]);

  // Now im using the effect hook to call the server to fetch the products.
  // We should pass a second argument to the useEffect, which is optional, we pass
  // an array of dependencies.

  // In this array we can add one or more variables (can be Props or states), and our Effect
  // will be dependant on those values, if any of these values changes, react will rerun our
  // effect, but if we pass an empty array it means that the effect is not dependant on any
  // value, and will be executed only once.
  useEffect(() => {
    console.log('Fetching Products. in', category);
    setProducts(['Clothing', 'Household']);
  }, [category]); //* --> every time the value of the category changes, react will re render this effect.
  // We use this because, if not we end up in an infinite loop, because the function of effect
  // we pass to the 'useEffect' gets executed after each render, and in the function we are
  // passing we are updating the state ('setProducts') which triggers another render, and so on.

  //! so if as fo the second argument on 'useEffect':
  //! - If we leave it out, React will execute our effect after every render.
  //! - If we pass an empty array, React will execute the effect only once, the first time our component is rendered.
  //! - If we add one or more values, Rect will rerun the effect every time any of those values changes.
  return <div>ProductList</div>;
};

export default ProductList;
