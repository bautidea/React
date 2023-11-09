import React, { ChangeEvent, FormEvent, useRef } from 'react';
import { FieldValues } from 'react-hook-form';
interface Expenses {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  categories: string[];
  loadedExpenses: Expenses[];
  selectedCategory: string;
  onDelete: (data: number) => void;
  onSelected: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const ShowExpenses = ({
  categories,
  loadedExpenses,
  selectedCategory,
  onDelete,
  onSelected,
}: Props) => {
  const categoriesToShow =
    selectedCategory !== 'all'
      ? loadedExpenses.filter(
          (expense) => expense.category === selectedCategory
        )
      : loadedExpenses;

  return (
    <div>
      <div className="mb-3">
        <select
          className="form-select"
          onChange={onSelected}
          value={selectedCategory}
        >
          <option value="all">All categories</option>
          {categories.map((item, ind) => (
            <option key={ind} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {categoriesToShow.map((expense) => {
            return (
              <tr key={expense.id}>
                <td scope="col">{expense.description}</td>
                <td scope="col">{expense.amount}</td>
                <td scope="col">{expense.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(expense.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowExpenses;
