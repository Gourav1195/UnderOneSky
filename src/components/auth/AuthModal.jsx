import React, {useState, useEffect} from 'react';
import axios from 'axios';


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
      const response  = await axios.post('https://under-one-sky-server.vercel.app/api/sign-in', { email,
      // const response  = await axios.post('http://localhost:5000/api/sign-in', { email,
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
      const response = await axios.post('https://under-one-sky-server.vercel.app/api/sign-up', { email, password, name });
      // const response = await axios.post('http://localhost:5000/api/sign-up', { email, password, name });
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
      <button
        onClick={() => setIsModalOpen(true)}
        className="hover:text-gray-200"
      >
        {isSigningIn ? 'Sign In' : 'Sign Up'}
      </button>
  
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg w-96 p-6 relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
          >
            <button
              className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold text-center mb-4">
              {isSigningIn ? 'Sign In' : 'Sign Up'}
            </h2>
            <form
              className="space-y-4"
              onSubmit={isSigningIn ? handleSubmit : handleSignupSubmit}
            >
              {!isSigningIn && (
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-5/6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-5/6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-[93%] py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                {isSigningIn ? 'Sign In' : 'Sign Up'}
              </button>
            </form>
            <p className="text-center mt-4">
              {isSigningIn ? (
                <>
                  Don't have an account?{' '}
                  <span
                    onClick={() => setIsSigningIn(false)}
                    className="text-blue-500 hover:underline cursor-pointer"
                  >
                    Sign Up
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <span
                    onClick={() => setIsSigningIn(true)}
                    className="text-blue-500 hover:underline cursor-pointer"
                  >
                    Sign In
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