import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Log.css'

const AuthModal = () => {
  // const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [user, setUser] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(true); // Toggle between Sign-In and Sign-Up
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Only for Sign-Up


  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      // const response  = await axios.post('https://under-one-sky-server.vercel.app/api/sign-in', { email,
      const response  = await axios.post('http://localhost:5000/api/sign-in', { email,
      password});
      console.log(response);  // Log the response to check if it's correct
      console.log(response.data.user.email);
      
      setUser(response.data.user.email);
      localStorage.setItem('user', JSON.stringify(response.data.user.email));
      localStorage.setItem('token', response.data.token);

      console.log('user from localStorage:', localStorage.getItem('user'));
      console.log("Signed in successfully", response.data.user);
    
      window.location.reload();

      setIsModalOpen(false);
      
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert('Signed In failed');
    }
  };
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSignupSubmit = async(e) => {
    e.preventDefault();
    
    try {
      // const response = await axios.post('https://under-one-sky-server.vercel.app/api/sign-up', { email, password, name });
      const response = await axios.post('http://localhost:5000/api/sign-up', { email, password, name });
      setUser(response.data.user.email);
      localStorage.setItem('user', JSON.stringify(response.data.user.email));
      localStorage.setItem('token', response.data.token);

      console.log('user from localStorage:', localStorage.getItem('user'));
      console.log("Signed in successfully", response.data.user);
    
      window.location.reload();

      // Handle successful sign-up response
      alert(`Signed up successfully with Email: ${email}`);
      
      setIsModalOpen(false);

      
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert('Sign-Up failed');
    }
  };

  return (
    <>
      {/* Auth Button */}
      <button onClick={() => setIsModalOpen(true)} className="auth-button">
        {isSigningIn ? 'Sign In' : 'Sign Up'}
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal">
            <button
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2>{isSigningIn ? 'Sign In' : 'Sign Up'}</h2>
            <form onSubmit={isSigningIn ? handleSubmit : handleSignupSubmit}>
              {!isSigningIn && (
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}
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
              <button type="submit">{isSigningIn ? 'Sign In' : 'Sign Up'}</button>
            </form>
            <p>
              {isSigningIn ? (
                <>
                  Don't have an account?{' '}
                  <span
                    onClick={() => setIsSigningIn(false)}
                    style={{ cursor: 'pointer', color: '#007bff' }}
                  >
                    Sign&nbsp;Up
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <span
                    onClick={() => setIsSigningIn(true)}
                    style={{ cursor: 'pointer', color: '#007bff' }}
                  >
                    Sign&nbsp;In
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthModal;