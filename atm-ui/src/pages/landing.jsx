import React from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)'
    }}>
      <h1 style={{ color: '#2d3748', marginBottom: '1rem' }}>Welcome to the ATM Application</h1>
      <p style={{ fontSize: '1.2rem', color: '#4a5568', marginBottom: '2rem' }}>Please insert your card to continue</p>
      <button
        style={{
          padding: '0.75rem 2rem',
          fontSize: '1rem',
          backgroundColor: '#3182ce',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(49, 130, 206, 0.15)'
        }}
        onClick={() => navigate("/login")}
      >
        Insert Card
      </button>
    </div>
  );
}

export default Landing;