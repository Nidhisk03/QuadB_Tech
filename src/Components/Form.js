// BookingForm.js
import React, { useState } from 'react';
import { useParams} from 'react-router-dom';
import { useSelector } from "react-redux"


const Form = () => {
  const { showId } = useParams();
  const list = useSelector(store => store.user.nowPlayingMovies);
  const filterList = list.filter((res) => res.show.id == showId);

  console.log(filterList[0].show.name)

  const [formData, setFormData] = useState({
    movieName:filterList[0].show.name , // Assuming you pass this from a parent component
    userName: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.userName.trim()) {
      newErrors.userName = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Store user details in local storage
      localStorage.setItem('userDetails', JSON.stringify(formData));

      // Perform booking logic or API request
      console.log('Form submitted with data:', formData);
    } else {
      console.log('Form has errors. Please fix them.');
    }
  };
  return (
    <div className="max-w-md mx-auto my-[100px] bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-[600] mb-4">Booking Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="movieName" className="block text-sm font-medium text-gray-600">
            Movie Name
          </label>
          <input
            type="text"
            id="movieName"
            name="movieName"
            value={formData.movieName}
            readOnly
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="userName" className="block text-sm font-medium text-gray-600">
            Your Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border rounded-md ${errors.userName ? 'border-red-500' : ''}`}
          />
          {errors.userName && <span className="text-red-500 text-sm">{errors.userName}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>

        <button
          type="submit"
          className="bg-[#3c948b] text-white px-4 py-2 rounded-md hover:bg-[#3c948b] focus:outline-none focus:ring focus:border-blue-300"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Form;


