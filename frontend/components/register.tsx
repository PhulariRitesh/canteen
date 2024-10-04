import React from 'react';
import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/router';

function Registerform() {
  const { register, handleSubmit, control, formState } = useForm();
  const { errors } = formState;
  const router = useRouter();

  const handleFormSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text(); // Get the error response text
        throw new Error(`Network response was not ok: ${errorText}`);
      }

      const responseData = await response.json();
      console.log(responseData);
      toast.success('Registration successful');
      router.push('/login');
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
      toast.error('Registration failed');
    }
  };
  

  return (
    <div className="container mx-auto px-4">
      <form onSubmit={handleSubmit(handleFormSubmit)} noValidate className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className={`mt-1 block w-full p-2 border rounded-md ${errors.companyName ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Name"
            {...register("Name", { required: "Name is required" })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="text"
            className={`mt-1 block w-full p-2 border rounded-md ${errors.website ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Email"
          />
        </div>
        <div className="flex justify-between">
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              className={`mt-1 block w-full p-2 border rounded-md ${errors.website ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Phone"
            />
            </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Roll Number</label>
            <input
              type="text"
              className={`mt-1 block w-full p-2 border rounded-md ${errors.website ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Phone"
            />
            </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Room Number</label>
            <input
              type="text"
              className={`mt-1 block w-full p-2 border rounded-md ${errors.website ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Phone"
            />
            </div>
          </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className={`mt-1 block w-full p-2 border rounded-md ${errors.website ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Password"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            className={`mt-1 block w-full p-2 border rounded-md ${errors.website ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Confirm Password"
          />
        </div>
        <button  type="submit"  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          SIGN UP
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default Registerform;
