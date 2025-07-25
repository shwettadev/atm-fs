import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Withdraw from '../components/WithDraw';
import CheckBalance from '../components/CheckBalance';
import AccountDetails from '../components/AccountDetails';
import Deposit from '../components/Deposit'

const ATM = () => {
  const navigate = useNavigate();
  const [screen, setScreen] = useState('home');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [deposit,setDeposit] = useState('')
  const [transactions, setTransactions] = useState([]);

  const handleCheckBalance = () => setScreen('balance');
  const handleWithdrawMoney = () => setScreen('withdraw');
  const handleViewTransactionHistory = () => setScreen('transactions');
  const handleViewAccountDetails = () => setScreen('account');
  const handleDeposit = () => setScreen('deposit');
  const handleLogout = () => {
    alert('You have logged out');
    navigate('/login');
  };

  const handleConfirmWithdrawal = () => {
    const amount = Number(withdrawAmount);
    if (!amount || isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount');
    } else {
      const newTransaction = {
        type: 'Withdrawal',
        amount,
        date: new Date().toLocaleDateString('en-GB'),
      };
      setTransactions((prev) => [...prev, newTransaction]);
      alert(`Withdrawal of $${withdrawAmount} successful!`);
      setWithdrawAmount('');
      setScreen('home');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Box
        sx={{
          width: 400,
          backgroundColor: '#333',
          color: '#fff',
          borderRadius: 2,
          boxShadow: 3,
          p: 3,
          textAlign: 'center',
        }}
      >
        {/* Home Screen */}
        {screen === 'home' && (
          <>
            <Typography variant="h4" mb={2}>Welcome to ATM</Typography>
            <Typography variant="body1" mb={3}>Select an option:</Typography>
            <Button variant="contained" fullWidth sx={buttonStyle} onClick={handleViewAccountDetails}>
              Account Details
            </Button>
            <Button variant="contained" fullWidth sx={buttonStyle} onClick={handleCheckBalance}>
              Check Balance
            </Button>
            <Button variant="contained" fullWidth sx={buttonStyle} onClick={handleWithdrawMoney}>
              Withdraw Money
            </Button>
             <Button variant="contained" fullWidth sx={buttonStyle} onClick={handleDeposit}>
               Deposit
             </Button>

            <Button variant="contained" fullWidth sx={buttonStyle} onClick={handleLogout}>
              Logout
            </Button>
          </>
        )}

        {/* Balance Screen */}
        {screen === 'balance' && (
          <CheckBalance setScreen={setScreen} />
        )}

        {/* Withdraw Screen */}
        {screen === 'withdraw' && (
          <Withdraw
            withdrawAmount={withdrawAmount}
            setWithdrawAmount={setWithdrawAmount}
            handleConfirmWithdrawal={handleConfirmWithdrawal}
            setScreen={setScreen}
          />
        )}
         {screen === 'deposit' && (
          <Deposit
            withdrawAmount={deposit}
            setWithdrawAmount={setDeposit}
            handleConfirmWithdrawal={handleConfirmWithdrawal}
            setScreen={setScreen}
          />
        )}
        {/* Account Details Screen */}
        {screen === 'account' && (
          <AccountDetails setScreen={setScreen} />
        )}
      </Box>
    </Box>
  );
};

// Reusable Styles
const buttonStyle = {
  mb: 2,
  backgroundColor: '#007bff',
  '&:hover': { backgroundColor: '#0056b3' },
};

const backButtonStyle = {
  backgroundColor: '#6c757d',
  '&:hover': { backgroundColor: '#5a6268' },
};

export default ATM;
