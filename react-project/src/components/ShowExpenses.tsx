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
  expenses: Expenses[];
  selectedCategory: string;
  onDelete: (id: number) => void;
  onSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const ShowExpenses = ({
  categories,
  expenses,
  selectedCategory,
  onDelete,
  onSelect,
}: Props) => {
  const totalExpenses = expenses.reduce((accumulator, expense) => {
    return accumulator + expense.amount;
  }, 0);

  return (
    <>
      <div>
        <div className="mb-3">
          <select
            className="form-select"
            onChange={onSelect}
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

        {/* If there are no expenses to show */}
        {expenses.length === 0 ? null : (
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
              {expenses.map((expense) => {
                return (
                  <tr key={expense.id}>
                    <td scope="col">{expense.description}</td>
                    <td scope="col">${expense.amount.toFixed(2)}</td>
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
            <tfoot>
              <tr>
                <td scope="col">Total</td>
                <td scope="col">${totalExpenses.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    </>
  );
};

export default ShowExpenses;
