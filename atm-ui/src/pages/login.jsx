import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  let navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:9001/atm/insertcard?cardNumber=${cardNumber}&pin=${pin}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const result = await response.text();
      console.log(result, "result");
      if (response.ok) {
        navigate('/dashboard', { state: {carddata:result}});
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
          ATM Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Card Number"
            type="text"
            fullWidth
            required
            margin="normal"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <TextField
            label="PIN"
            type="password"
            fullWidth
            required
            margin="normal"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
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
      </Box>
    </Container>
  );
};

export default LoginForm;