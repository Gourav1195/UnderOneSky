// import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./theme";
import { useEffect, useState } from "react";
import Logout from "./auth/Logout";
export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [storedUser, setStoredUser] = useState(null);
  // console.log(theme);
  useEffect(() => {
        const user = localStorage.getItem('user');
      if(user) {
        try {
          setStoredUser(JSON.parse(user));
          console.log("user from localstorage: ", JSON.parse(user));
      
        } catch (error) {
          console.log('failed to get user from localstorage error', error)
        }
      }
  },[]);
  return (
    <nav className={`navbar ${theme}`}>
   
      <div>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/timer">Timer</Link>
        
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/reminder">Reminder</Link>

        {storedUser ? (<Link to="/logout">Logout </Link>) : 
        (<Link to="/login">Login</Link>)}
        
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
