import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId="299519818035-2ss0ckmifaanv198sfee6e0h4uosov9b.apps.googleusercontent.com">
    <App /></GoogleOAuthProvider>
  </React.StrictMode>
);

