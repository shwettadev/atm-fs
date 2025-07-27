import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginForm from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import {Navigate} from 'react-router-dom'
import Landing from './pages/landing';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Landing/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

