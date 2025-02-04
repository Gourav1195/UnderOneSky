// import axios from '../services/axios'
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Sign-in.css'

const SignIn = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response  = await axios.post('https://under-one-sky-server.vercel.app/api/sign-in', { email,
      // const response  = await axios.post('http://localhost:5000/api/sign-in', { email,
      password});
      setUser(response.data.user);
      console.log(response.data.user.name);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user.name));
      console.log("Signed in successfully", 'user:', user);
      console.log("user.email", user.id);
      // const local = localStorage.getItem('user');
      // const user2 = JSON.parse(local);
      
  } catch (error) {
    console.error(error.response?.data || error.message);
    alert('Signed In failed');
  }
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Open Login Modal
      </button>
  
      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-lg w-96 p-6 relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
          >
            <button
              className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold text-center mb-4">Sign In</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Sign In
              </button>
            </form>
            <a
              className="block text-center text-blue-500 mt-4 hover:underline"
              onClick={() => {
                setShowModal(false); // Close modal
                navigate('/signup'); // Navigate to signup page
              }}
            >
              Create an account
            </a>
          </div>
        </div>
      )}
    </>
  );
  
};

export default SignIn;