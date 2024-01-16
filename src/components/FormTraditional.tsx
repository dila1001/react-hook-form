import React, { useState } from 'react';

const FormTraditional = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Form submitted:', { firstName, lastName, message });
    setFirstName('');
    setLastName('');
    setMessage('');
    setIsSubmitting(false);
  };
  return (
    <form onSubmit={handleSubmit}>
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
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder='First Name'
          required
        />
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
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder='Last Name'
          required
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='message' className='block text-gray-700 font-bold mb-2'>
          Message
        </label>
        <textarea
          id='message'
          className='w-full p-2 border border-gray-300 rounded'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Message'
          required
        ></textarea>
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

export default FormTraditional;
