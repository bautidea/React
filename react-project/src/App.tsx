import AddExpenseForm from './components/AddExpenseForm';
import ShowExpenses from './components/ShowExpenses';
import { FieldValues, UseFormReset } from 'react-hook-form';

function App() {
  // Defining all possible categories
  const categories = ['Groceries', 'Utilities', 'Entertainment'];

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <AddExpenseForm
        categories={categories}
        onSubmit={onSubmit}
      ></AddExpenseForm>
      <ShowExpenses categories={categories}></ShowExpenses>
    </div>
  );
}

export default App;
