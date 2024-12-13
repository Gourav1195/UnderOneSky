import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ThemeProvider } from './components/theme';
import Home from './components/home/Home';
import LogPage from './components/auth/logPage.jsx'
import Logout from './components/auth/Logout.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LogPage/>} />
          
          <Route path="/logout" element={<Logout/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}