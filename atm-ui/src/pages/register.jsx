import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import {useNavigate } from 'react-router-dom';

const Register = () => {
  let navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:9001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }),
      });

      const result = await response.text();
      if (response.ok) {
        alert('Login successful: ' + result);
        navigate('/login'); // Redirect to login page after successful registration
      } else {
        setError(result);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: '#f9f9f9',
        }}
      >
        <Typography variant="h4" mb={3} textAlign="center">
          Register
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            type="text"
            fullWidth
            required
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Typography color="error" mt={2}>
              {error}
            </Typography>
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Register
          </Button>

        </form>
      </Box>
    </Container>
  );
};

export default Register;
