import { Box, Button, Typography } from "@mui/material";
import { use, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AccountDetails from "../components/AccountDetails";
import CheckBalance from "../components/CheckBalance";
import Deposit from "../components/Deposit";
import Withdraw from "../components/WithDraw";
import ChangePin from "../components/ChangePin";

const ATM = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cardData = location.state;
  const [screen, setScreen] = useState("home");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [deposit, setDeposit] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");

  const handleCheckBalance = () => setScreen("balance");
  const handleWithdrawMoney = () => setScreen("withdraw");
  const handleViewTransactionHistory = () => setScreen("transactions");
  const handleViewAccountDetails = () => setScreen("account");
  const handleDeposit = () => setScreen("deposit");
  const handleLogout = async () => {
    try {
      const response = await fetch(`http://localhost:9001/atm/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.text();
      if (response.ok) {
        navigate("/");
      } else {
        setError(result);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };
  const handlePinChange = () => {
    setScreen("changePin");
  }

  const handleConfirmWithdrawal = () => {
    const amount = Number(withdrawAmount);
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount");
    } else {
      const newTransaction = {
        type: "Withdrawal",
        amount,
        date: new Date().toLocaleDateString("en-GB"),
      };
      setTransactions((prev) => [...prev, newTransaction]);
      alert(`Withdrawal of $${withdrawAmount} successful!`);
      setWithdrawAmount("");
      setScreen("home");
    }
  };
  useEffect(() => {
    // if (location.state) {
      console.log(location, "state");
    // }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Box
        sx={{
          width: 400,
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: 2,
          boxShadow: 3,
          p: 3,
          textAlign: "center",
        }}
      >
        {/* Home Screen */}
        {screen === "home" && (
          <>
            <Typography variant="h4" mb={2}>
              {`Hi, ${cardData.cardNumber}, welcome to ATM`}
            </Typography>
            <Typography variant="body1" mb={3}>
              Please select an option below:
            </Typography>
            <Button
              variant="contained"
              fullWidth
              sx={buttonStyle}
              onClick={handleViewAccountDetails}
            >
              Account Details
            </Button>
            <Button
              variant="contained"
              fullWidth
              sx={buttonStyle}
              onClick={handleCheckBalance}
            >
              Check Balance
            </Button>
            <Button
              variant="contained"
              fullWidth
              sx={buttonStyle}
              onClick={handleWithdrawMoney}
            >
              Withdraw Money
            </Button>
            <Button
              variant="contained"
              fullWidth
              sx={buttonStyle}
              onClick={handleDeposit}
            >
              Deposit
            </Button>
            <Button
              variant="contained"
              fullWidth
              sx={buttonStyle}
              onClick={handlePinChange}
            >
              Change PIN
            </Button>

            <Button
              variant="contained"
              fullWidth
              sx={buttonStyle}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        )}

        {/* Balance Screen */}
        {screen === "balance" && <CheckBalance setScreen={setScreen} />}
        {screen === 'changePin' && <ChangePin setScreen={setScreen} />}

        {/* Withdraw Screen */}
        {screen === "withdraw" && (
          <Withdraw
            withdrawAmount={withdrawAmount}
            setWithdrawAmount={setWithdrawAmount}
            handleConfirmWithdrawal={handleConfirmWithdrawal}
            setScreen={setScreen}
          />
        )}
        {screen === "deposit" && (
          <Deposit
            withdrawAmount={deposit}
            setWithdrawAmount={setDeposit}
            handleConfirmWithdrawal={handleConfirmWithdrawal}
            setScreen={setScreen}
          />
        )}
        {/* Account Details Screen */}
        {screen === "account" && <AccountDetails setScreen={setScreen} />}
      </Box>
    </Box>
  );
};

// Reusable Styles
const buttonStyle = {
  mb: 2,
  backgroundColor: "#007bff",
  "&:hover": { backgroundColor: "#0056b3" },
};

const backButtonStyle = {
  backgroundColor: "#6c757d",
  "&:hover": { backgroundColor: "#5a6268" },
};

export default ATM;
