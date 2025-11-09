import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router';
import { RiseLoader } from 'react-spinners';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Myprofile = () => {
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
      easing: 'ease-in-out',
    });
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex flex-col justify-center items-center text-center text-6xl min-h-screen">
          <RiseLoader size={30} />
        </div>
      ) : user ? (
        <div
          className="min-h-screen bg-blue-50 flex items-center justify-center py-10 px-4"
          data-aos="fade-in"
        >
          <div
            className="bg-orange-50 shadow-lg rounded-2xl p-8 w-full max-w-md text-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="flex justify-center mb-6" data-aos="fade-down">
              <img
                src={user.photoURL}
                alt="User Avatar"
                className="w-28 h-28 rounded-full border-4 border-orange-200 object-cover"
              />
            </div>

            <h2
              className="text-2xl font-bold text-gray-800 mb-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {user.displayName}
            </h2>

            <p
              className="text-gray-600 mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {user.email}
            </p>

            <div data-aos="fade-up" data-aos-delay="400">
              <Link to="/updateprofile">
                <button className="btn bg-orange-400 hover:bg-gradient-to-r from-orange-700 to-orange-500 text-white font-semibold transition ease-in-out rounded-2xl">
                  Update Profile
                </button>
              </Link>
            </div>

            <div
              className="mt-6 border-t border-gray-200 pt-4 text-sm text-gray-500"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <p>Manage your profile and keep your pet care account updated 🐾</p>
            </div>
          </div>
        </div>
      ) : (
        <h2
          className="text-3xl font-bold text-center text-gray-800 my-20 animate-bounce"
          data-aos="fade-up"
        >
          Please{' '}
          <Link to="/login">
            <span className="bg-gradient-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text font-bold hover:scale-105 transition ease-in-out">
              Login or Register
            </span>
          </Link>{' '}
          to view your profile.
        </h2>
      )}
    </div>
  );
};

export default Myprofile;
