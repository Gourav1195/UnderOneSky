import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "./theme";
import { useEffect, useState } from "react";
import AuthModal from "./auth/AuthModal";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    alert('logged out successfully');
    navigate('/');
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  return (
    <>
      <nav className={`navbar ${theme} p-4 shadow-md`}>
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="font-comic-sans text-2xl font-bold">
            UnderOneSky
          </Link>

          <ul className="hidden md:flex space-x-6">
            {['Weather', 'Shop', 'Leaderboard', 'AI Chatbot'].map((item, index) => (
              <li key={index}>
                <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="hover:text-gray-200">{item}</Link>
              </li>
            ))}
            <li>
              {user ? (
                <button className='auth-button' onClick={handleLogout}>
                  {user || 'Logout'}
                </button>
              ) : (
                <AuthModal />
              )}
            </li>
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

          <button
            className="md:hidden text-white focus:outline-none my-1 nav-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {isOpen && (
          <ul className={`z-10 navbar ${theme} md:hidden flex flex-col items-center py-4 space-y-4`}>
            <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
            {['Weather', 'Shop', 'Leaderboard', 'AI Chatbot'].map((item, index) => (
              <li key={index}>
                <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="hover:text-gray-200">{item}</Link>
              </li>
            ))}
            <li>
              {user ? (
                <button className='auth-button' onClick={handleLogout}>
                  {user || 'Logout'}
                </button>
              ) : (
                <AuthModal />
              )}
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
