// import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./theme";
import { useEffect, useState } from "react";
import Logout from "./auth/Logout";
import AuthModal from "./auth/AuthModal";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [user, setUser] = useState(null);

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
    <nav className={`navbar ${theme}`}>
   
      <div>
        <Link className="nav-button" to="/">Home</Link>
        {/* <Link to="/blog">Blog</Link> */}
        <Link className="nav-button" to="/shop">Shop</Link>
        
        <Link className="nav-button" to="/leaderboard">Leaderboard</Link>
        {/* <Link to="/reminder">Reminder</Link> */}

        {user ? (<button className='auth-button' onClick={() =>{handleLogout()}}>{user? user : 'logout'} </button>) : 
        (<AuthModal />)}
        
      </div>
      <div className="mode-switch">
        <label>
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <span className="slider round"> </span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
