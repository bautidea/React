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
  // Defining all possible categories
  const categories = ['Groceries', 'Utilities', 'Entertainment'];

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

  return (
    <div>
      <AddExpenseForm
        categories={categories}
        onSubmit={onSubmit}
      ></AddExpenseForm>
      <ShowExpenses
        categories={categories}
        loadedExpenses={expenses}
        selectedCategory={selectedCategory}
        onDelete={onDelete}
        onSelected={filterCategory}
      ></ShowExpenses>
    </div>
  );
}

export default App;
