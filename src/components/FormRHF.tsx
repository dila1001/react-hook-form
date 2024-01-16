import { SubmitHandler, useForm } from 'react-hook-form';

type FormData = {
  firstName: string;
  lastName: string;
  message: string;
};

const FormRHF = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-4'>
        <label
          htmlFor='firstName'
          className='block text-gray-700 font-bold mb-2'
        >
          First Name
        </label>
        <input
          type='text'
          id='firstName'
          className='w-full p-2 border border-gray-300 rounded'
          placeholder='First Name'
          {...register('firstName', {
            required: 'First name is required',
          })}
        />
        {errors.firstName && (
          <p className='text-red-500'>{`${errors.firstName.message}`}</p>
        )}
      </div>
      <div className='mb-4'>
        <label
          htmlFor='lastName'
          className='block text-gray-700 font-bold mb-2'
        >
          Last Name
        </label>
        <input
          type='text'
          id='lastName'
          className='w-full p-2 border border-gray-300 rounded'
          placeholder='Last Name'
          {...register('lastName', {
            required: 'Last name is required',
          })}
        />
        {errors.lastName && (
          <p className='text-red-500'>{`${errors.lastName.message}`}</p>
        )}
      </div>
      <div className='mb-4'>
        <label htmlFor='message' className='block text-gray-700 font-bold mb-2'>
          Message
        </label>
        <textarea
          id='message'
          className='w-full p-2 border border-gray-300 rounded'
          placeholder='Message'
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 2,
              message: 'Message must be more that 2 characters',
            },
          })}
        ></textarea>
        {errors.message && (
          <p className='text-red-500'>{`${errors.message.message}`}</p>
        )}
      </div>
      <button
        type='submit'
        disabled={isSubmitting}
        className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue'
      >
        Send
      </button>
    </form>
  );
};

export default FormRHF;
