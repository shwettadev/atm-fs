import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";

function Withdraw({ withdrawAmount, setWithdrawAmount, setScreen }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const handleConfirmWithdrawal = () => {
    const amount = withdrawAmount.toString(); // Ensure string
    const card = cardNumber.toString();       // Ensure string

    setLoading(true);
    setMessage("");

    // Build URL with parameters
    const url = `http://localhost:9001/atm/account/withdraw?cardNumber=${encodeURIComponent(card)}&amount=${encodeURIComponent(amount)}`;

    fetch(url, {
      method: "POST",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to withdraw");
        setMessage("Withdrawal successful!");
      })

      .catch((err) => {
        console.error(err);
        setMessage("Failed to complete withdrawal.");
      })
      .finally(() => {
        setLoading(false);
      });
  };


  return (
    <>
      <Typography variant="h5" mb={2}>Withdraw Money</Typography>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Enter Card Number"
        type="text"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        sx={{ mb: 3, backgroundColor: '#fff', borderRadius: 1 }}
        InputProps={{ style: { color: '#000' } }}
      />

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Enter amount"
        type="number"
        value={withdrawAmount}
        onChange={(e) => setWithdrawAmount(e.target.value)}
        sx={{ mb: 3, backgroundColor: '#fff', borderRadius: 1 }}
        InputProps={{ style: { color: '#000' } }}
      />

      {message && (
        <Typography variant="body2" mb={2} color={message.includes("successful") ? "green" : "error"}>
          {message}
        </Typography>
      )}

      <Button
        variant="contained"
        fullWidth
        sx={{ mb: 2, backgroundColor: '#28a745', '&:hover': { backgroundColor: '#218838' } }}
        onClick={handleConfirmWithdrawal}
        disabled={loading}
      >
        {loading ? "Processing..." : "Continue"}
      </Button>

      <Button
        variant="contained"
        fullWidth
        sx={backButtonStyle}
        onClick={() => {
          setWithdrawAmount('');
          setCardNumber('');
          setScreen('home');
        }}
      >
        Back
      </Button>
    </>
  );
}

const backButtonStyle = {
  backgroundColor: '#6c757d',
  '&:hover': { backgroundColor: '#5a6268' },
};

export default Withdraw;
