import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import categories from '../categories';

const schema = z.object({
  description: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters.' }),
  amount: z
    .number({
      required_error: 'Amount is required.',
      invalid_type_error: 'Age must be a number.',
    })
    .min(0.01),
  // The type of category field is going to be one of many values ('Groceries', 'Utilities', 'Entertainment')
  // and nothing else, for that reason the type is going to be enum, this type can be one of many values.
  // For categories to be used as a type it needs to be a constant, their values shouldnt vary, thats why
  // in App module im declaring this variable as constant (const array = [] as const)
  category: z.enum(categories, {
    errorMap: () => ({ message: 'Category is required' }),
  }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FieldValues) => void;
}

const AddExpenseForm = ({ onSubmit }: Props) => {
  // Using react-hook-form to handle form submissions
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handleFormSubmission = (data: FieldValues) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmission)}>
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

        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>

        <input
          {...register('amount', { valueAsNumber: true })}
          id="amount"
          className="form-control"
          type="number"
        />

        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>

        <select
          {...register('category')}
          id="category"
          className="form-select"
          defaultValue={''}
        >
          <option value="" disabled></option>

          {categories.map((item, ind) => (
            <option key={ind} value={item}>
              {item}
            </option>
          ))}
        </select>

        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary mb-5">
        Submit
      </button>
    </form>
  );
};

export default AddExpenseForm;
