import React from 'react';
import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/router';

function Register_form({ categories, sectors }) {
  const { register, handleSubmit, control, formState } = useForm();
  const { errors } = formState;
  const router = useRouter();

  const handleFormSubmit = async (data) => {
    try {
      console.log(data);

      if (data.pocAltEmail === "") delete data.pocAltEmail;
      if (data.pocAltPhone === "") delete data.pocAltPhone;

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };

      console.log(requestOptions.body);
      const response = await fetch('/recruiter/apply', requestOptions);
      const responseData = await response.json();

      console.log(responseData);

      if (responseData.success === false) {
        toast.error(responseData.message, {
          position: toast.POSITION.BOTTOM_CENTER,
          theme: 'colored'
        });
      } else {
        toast.success(responseData.message, {
          position: toast.POSITION.BOTTOM_CENTER,
          theme: 'colored'
        });

        router.push('/thankyou');
      }
    } catch (error) {
      console.log("Error is : ", error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <form onSubmit={handleSubmit(handleFormSubmit)} noValidate className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Company's Name</label>
          <input
            type="text"
            className={`mt-1 block w-full p-2 border rounded-md ${errors.companyName ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Company's Name"
            {...register("companyName", { required: "Company's Name is required" })}
          />
          {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Company's Website</label>
          <input
            type="text"
            className={`mt-1 block w-full p-2 border rounded-md ${errors.website ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Company's Website"
            {...register("website", { required: "Company's Website is required" })}
          />
          {errors.website && <p className="text-red-500 text-sm mt-1">{errors.website.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Company's Description</label>
          <textarea
            rows="4"
            className={`mt-1 block w-full p-2 border rounded-md ${errors.about ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Company's Description"
            {...register("about", { required: "Company's Description is required" })}
          />
          {errors.about && <p className="text-red-500 text-sm mt-1">{errors.about.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Company's POC Name</label>
          <input
            type="text"
            className={`mt-1 block w-full p-2 border rounded-md ${errors.pocName ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="POC Name"
            {...register("pocName", { required: "Company's POC Name is required" })}
          />
          {errors.pocName && <p className="text-red-500 text-sm mt-1">{errors.pocName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Company's POC Email</label>
          <input
            type="email"
            className={`mt-1 block w-full p-2 border rounded-md ${errors.pocEmail ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="POC Email"
            {...register("pocEmail", { required: "POC Email is required" })}
          />
          {errors.pocEmail && <p className="text-red-500 text-sm mt-1">{errors.pocEmail.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Alternate Email</label>
          <input
            type="email"
            className="mt-1 block w-full p-2 border rounded-md border-gray-300"
            placeholder="Alternate Email"
            {...register("pocAltEmail")}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            className={`mt-1 block w-full p-2 border rounded-md ${errors.category ? 'border-red-500' : 'border-gray-300'}`}
            {...register("category", { required: "Please select one Category" })}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Sector</label>
          <select
            className={`mt-1 block w-full p-2 border rounded-md ${errors.sector ? 'border-red-500' : 'border-gray-300'}`}
            {...register("sector", { required: "Please select one sector" })}
          >
            {sectors.map((sector, index) => (
              <option key={index} value={sector}>{sector}</option>
            ))}
          </select>
          {errors.sector && <p className="text-red-500 text-sm mt-1">{errors.sector.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Company's POC Contact Number</label>
          <input
            type="text"
            className={`mt-1 block w-full p-2 border rounded-md ${errors.pocPhone ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="POC Contact Number"
            {...register("pocPhone", { required: "POC Contact Number is required" })}
          />
          {errors.pocPhone && <p className="text-red-500 text-sm mt-1">{errors.pocPhone.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Alternate Phone Number</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border rounded-md border-gray-300"
            placeholder="Alternate Phone Number"
            {...register("pocAltPhone")}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          SIGN UP
        </button>

        <ToastContainer />
      </form>
      {/* <DevTool control={control} /> */}
    </div>
  );
}

export default Register_form;
