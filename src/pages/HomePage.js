// HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Update import

function HomePage() {
  const navigate = useNavigate(); // Update hook

  const handleStartClick = () => {
    // Redirect to login page when "Let's Start" button is clicked
    navigate('/login'); // Update navigate
  };

  return (
    <div className="container">
    <h1>Welcome to the Real-Time English Communication Platform!</h1>
    <p>Enhance your English communication skills with our interactive platform.</p>
    <p>Practice speaking English in real-time, receive instant feedback, and improve your proficiency.</p>
    <p>Whether you're a student, a professional, or someone looking to boost their language skills, we have the tools and resources to help you succeed.</p>
    <button onClick={handleStartClick}>Let's Get Started <i className="fas fa-microphone"></i></button>
  </div>
  );
}

export default HomePage;
