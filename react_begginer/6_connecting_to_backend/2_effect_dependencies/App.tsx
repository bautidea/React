import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';

function App() {
  // We saw that the functions passed to 'useEffect' get executed after each render,
  // but there are situations where we dont want this default behavior, we want to
  // have more control over when this function gets executed
  const [category, setCategory] = useState('');

  return (
    <div>
      {/* 
        We are going to add a select to display the categories, 
        we need to keep track of the categories on a state variable 
      */}
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </div>
  );
}

export default App;
