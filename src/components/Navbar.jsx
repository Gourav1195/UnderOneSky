// import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./theme";
import { useEffect, useState } from "react";
import Logout from "./auth/Logout";
import AuthModal from "./auth/AuthModal";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () =>{
      
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    // setUser(null);
    window.location.reload();
    alert('logged out successfully');
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    let name = JSON.parse(storedUser);
    if (storedUser) {
      setUser(name); 
    }
  }, []);

  return (
    <>
    

      <nav className="{`navbar ${theme}`} p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="font-comic-sans text-2xl font-bold">
          UnderOneSky
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {/* <li><Link to="/" className="text-white hover:text-gray-200">Home</Link></li> */}
          <li><Link to="/shop" className=" hover:text-gray-200">Shop</Link></li>
          <li><Link to="/leaderboard" className=" hover:text-gray-200">Leaderboard</Link></li>
          <li><Link to="/ai" className="hover:text-gray-200">AI Chatbot</Link></li>
          <li> {user ? (<button className='auth-button' onClick={() =>{handleLogout()}}>{user? user : 'logout'} </button>) : 
        (<AuthModal />)}</li>
      </ul>
      <div className="mode-switch">
        <label>
          <input
          className="ml-1"
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <span className="slider round"> </span>
        </label>
        &nbsp;
      </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none my-1 nav-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="z-10 {`navbar ${theme}`} md:hidden flex flex-col items-center py-4 space-y-4">
          <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link to="/shop" className="hover:text-gray-200">Shop</Link></li>
          <li><Link to="/leaderboard" className="hover:text-gray-200">Leaderboard</Link></li>
          <li><Link to="/ai" className="hover:text-gray-200">AI Chatbot</Link></li>
          <li> {user ? (<button className='auth-button' onClick={() =>{handleLogout()}}>{user? user : 'logout'} </button>) : 
        (<AuthModal />)}</li>
      </ul>
      
      )}
    </nav>
</>
  );
};

export default Navbar;
