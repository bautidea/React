import React from 'react';

const AddExpenseForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Descriprion
        </label>

        <input id="description" className="form-control" type="text" />
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>

        <input id="amount" className="form-control" type="text" />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>

        <select id="category" className="form-select">
          <option selected></option>
          <option value="1">Groceries</option>
          <option value="2">Utilities</option>
          <option value="3">Entertainment</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary mb-5">
        Submit
      </button>
    </form>
  );
};

export default AddExpenseForm;
