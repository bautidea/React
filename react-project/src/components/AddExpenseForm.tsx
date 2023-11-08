import React, { FormEvent } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

interface Props {
  categories: string[];
  onSubmit: (data: FieldValues) => void;
}

const AddExpenseForm = ({ categories, onSubmit }: Props) => {
  // Using react-hook-form to handle form submissions
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>

        <input
          {...register('description')}
          id="description"
          className="form-control"
          type="text"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>

        <input
          {...register('amount')}
          id="amount"
          className="form-control"
          type="text"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>

        <select
          {...register('category')}
          id="category"
          className="form-select"
          defaultValue={'default'}
        >
          <option value="default" disabled></option>

          {categories.map((item, ind) => (
            <option key={ind} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-primary mb-5">
        Submit
      </button>
    </form>
  );
};

export default AddExpenseForm;
