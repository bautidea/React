import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
interface Props {
  categories: string[];
  onSubmit: (data: FieldValues) => void;
}

const schema = z.object({
  description: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters.' }),
  amount: z.number({
    required_error: 'Amount is required.',
    invalid_type_error: 'Age must be a number.',
  }),
  category: z.string().min(1, { message: 'Category is required' }),
});

type FormData = z.infer<typeof schema>;

const AddExpenseForm = ({ categories, onSubmit }: Props) => {
  // Using react-hook-form to handle form submissions
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

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
