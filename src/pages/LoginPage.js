// LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

function LoginPage() {
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    // Check if login was successful
    if (credentialResponse.credential) {
      // Redirect to Partics page
      navigate('/partics');
    } else {
      console.log('Login failed');
    }
  };

  const handleLoginError = () => {
    console.log('Login Failed');
    // Optionally, you can display an error message to the user here
  };

  return (
    <div className="container">
      <h1>Login Page</h1>
      <p>Please login using your Gmail account</p>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
      />
    </div>
  );
}

export default LoginPage;
