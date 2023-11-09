import React from 'react';

interface Expenses {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  categories: string[];
  loadedExpenses: Expenses[];
}

const ShowExpenses = ({ categories, loadedExpenses }: Props) => {
  return (
    <form>
      <div className="mb-3">
        <select id="category" className="form-select" defaultValue={'default'}>
          <option value="default">All categories</option>

          {categories.map((item, ind) => (
            <option key={ind} value={ind}>
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
          {loadedExpenses.map((expense) => {
            return (
              <tr key={expense.id}>
                <td scope="col">{expense.description}</td>
                <td scope="col">{expense.amount}</td>
                <td scope="col">{expense.category}</td>
                <td>
                  {' '}
                  <button className="btn btn-outline-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </form>
  );
};

export default ShowExpenses;
