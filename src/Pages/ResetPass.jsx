import { sendPasswordResetEmail } from 'firebase/auth';
import React, {  useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router';
import { auth } from '../Firebase/firebase.config';

const ResetPass = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const initialEmail = location.state?.email || '';
    const [email, setEmail] = useState(initialEmail);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            toast.error("Please enter your email address.");
        }
        sendPasswordResetEmail(auth, email)
        .then(() => {
            toast.success("🎉 Password reset email sent! Please check your inbox.");
            window.location.href = "https://mail.google.com/";
        })
        .catch(() => {
            toast.error("Failed to send password reset email. Please try again.");
        });
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="bg-orange-50 shadow-lg rounded-2xl p-8 w-full max-w-md hover:scale-105 transition ease-in-out duration-1000 animate__animated animate__fadeInDown">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Reset Your Password
        </h1>

        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your registered email"
             value={email}
                onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>

        
          <button
            type="submit"
            className="w-full btn bg-orange-400 hover:bg-gradient-to-r from-orange-700 to-orange-500 text-white font-semibold  hover:scale-105 transition ease-in-out rounded-2xl"
          >
            Reset Password
          </button>
        </form>

       
        <p className="text-center text-sm text-gray-600 mt-6">
          Remembered your password?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 font-semibold hover:underline"
          >
            Go Back to Login
          </button>
        </p>
      </div>
      <Toaster/>
    </div>
    );
};

export default ResetPass;