import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../Context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router';

const UpdateProfile = () => {
    const {user} = useContext(AuthContext);
    const [errorName, setErrorName] = useState('');
    const navigate = useNavigate();
    console.log(user);
    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        if (name.length < 6){
            setErrorName('Name must be at least 6 characters long.');
            return;
        }
        
        updateProfile(user, {
                displayName: name,
                photoURL: photoURL
            }).then(() => {
                toast.success("🎉 Profile Updated!");
                navigate('/');
            })
            .catch(() => {
                toast.error("Failed to update profile.");
            })

    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="bg-orange-50 shadow-lg rounded-2xl p-8 w-full max-w-md hover:scale-105 transition ease-in-out duration-1000 animate__animated animate__fadeInDown">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Update Your Profile
        </h1>

        <form onSubmit={handleUpdate}>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Full Name
            </label>
            <input
            name='name'
              type="text"
              placeholder="Enter your full name"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            {errorName ? <p className="text-red-500 text-sm mt-2">{errorName}</p> : null}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Photo URL
            </label>
            <input
            name='photoURL'
              type="text"
              placeholder="Enter your photo URL"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
        
          <button
            type="submit"
            className="w-full btn bg-orange-400 hover:bg-gradient-to-r from-orange-700 to-orange-500 text-white font-semibold  hover:scale-105 transition ease-in-out rounded-2xl"
          >
            Update
          </button>
        </form>
        </div>
        <Toaster/>
        </div>
    );
};

export default UpdateProfile;