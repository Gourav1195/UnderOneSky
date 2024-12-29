import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ThemeProvider } from './components/theme';
import Home from './components/home/Home';
import Logout from './components/auth/Logout.jsx';
import Leaderboard from './components/leaderboard/Leaderboard.jsx'
import Shop from './components/shop/Shop.jsx';
import AuthModal from './components/auth/AuthModal.jsx'


export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/leaderboard" element={<Leaderboard/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/auth" element={<AuthModal/>} />
          
          <Route path="/logout" element={<Logout/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}