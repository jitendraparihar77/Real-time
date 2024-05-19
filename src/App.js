import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ParticsPage from './pages/ParticsPage';
import LoginPage from './pages/LoginPage';
import FeedbackPage from './pages/FeedbackPage';
import './styles.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container-default">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/partics" element={<ParticsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path='/feedback' element={<FeedbackPage/>}/>

            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
