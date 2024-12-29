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
      <button onClick={() => setShowModal(true)}>Open Login Modal</button>

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
          >
            <button className="modal-close" onClick={() => setShowModal(false)}>
              &times;
            </button>
            <h2>Sign In</h2>
            <form className='login-form' onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Sign In</button>
            </form>
            <a
              className="signup-link"
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