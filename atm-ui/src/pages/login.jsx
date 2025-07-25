import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import {useNavigate} from 'react-router-dom';

const LoginForm = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  let navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:9001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }),
      });

      const result = await response.text();
      if (response.ok) {
        navigate('/dashboard');
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
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Card Number"
            type="text"
            fullWidth
            required
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Pin"
            type="text"
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
            Login
          </Button>

        </form>
         <Typography
                  variant="body2"
                  sx={{
                    position: 'relative',
                    top: 8,
                    left: 8,
                    color: 'blue',
                    cursor: 'pointer',
                  }}
                  onClick={() => window.location.href = '/register'}
                >
                  Register
                </Typography>
      </Box>
    </Container>
  );
};

export default LoginForm;
