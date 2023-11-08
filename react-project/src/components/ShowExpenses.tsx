import React from 'react';

interface Props {
  categories: string[];
}

const ShowExpenses = ({ categories }: Props) => {
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
          <tr>
            <td>Milk</td>
            <td>5</td>
            <td>Groceries</td>
            <td>
              <button className="btn btn-primary">Click ME</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default ShowExpenses;
