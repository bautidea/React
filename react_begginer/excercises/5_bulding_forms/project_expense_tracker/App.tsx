import { ChangeEvent, FormEvent, useState } from 'react';
import AddExpenseForm from './components/AddExpenseForm';
import ShowExpenses from './components/ShowExpenses';
import { FieldValues, UseFormReset } from 'react-hook-form';

interface Expenses {
  id: number;
  description: string;
  amount: number;
  category: string;
}

function App() {
  const [expenses, setExpenses] = useState<Expenses[]>([]);
  const [expenseId, setExpenseId] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const onSubmit = (data: FieldValues) => {
    const newExpense = {
      id: expenseId,
      description: data.description,
      amount: data.amount,
      category: data.category,
    };

    setExpenses([...expenses, newExpense]);
    setExpenseId(expenseId + 1);
  };

  const onDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filterCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  // Im not using a state variable because we can obtain the filtered expenses from an
  // existing state variable.
  const expensesToShow =
    selectedCategory !== 'all'
      ? expenses.filter((expense) => expense.category === selectedCategory)
      : expenses;

  return (
    <div>
      <AddExpenseForm onSubmit={onSubmit}></AddExpenseForm>
      <ShowExpenses
        expenses={expensesToShow}
        selectedCategory={selectedCategory}
        onDelete={onDelete}
        onSelect={filterCategory}
      ></ShowExpenses>
    </div>
  );
}

export default App;
