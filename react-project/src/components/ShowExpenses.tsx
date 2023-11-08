import React from 'react';

const ShowExpenses = () => {
  return (
    <form>
      <div className="mb-3">
        <select id="category" className="form-select">
          <option selected>All categories</option>
          <option value="1">Groceries</option>
          <option value="2">Utilities</option>
          <option value="3">Entertainment</option>
        </select>
      </div>

      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Milk</td>
            <td>5</td>
            <td>Groceries</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default ShowExpenses;
