import React, {useState} from 'react'
// import axios from '../services/axios'
import axios from 'axios';
// import cors from 'cors';
const SignIn = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async (e) => {
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
    
    <form onSubmit={handleSubmit}>
      <h2>Signed In </h2>
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
       />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
       />
       <button type='submit'>Sign In</button>
    </form>
    </>
  )
}

export default SignIn;




// import React, { useState } from 'react';
// import { login } from '../services/authService';

// const SignIn = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await login(username, password);
//       setMessage('Login successful!');
//     } catch (error) {
//       setMessage('Invalid credentials');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Sign In</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit">Sign In</button>
//       {message && <p>{message}</p>}
//     </form>
//   );
// };

// export default SignIn;
