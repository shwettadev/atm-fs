import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";

function CheckBalance({ setScreen }) {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9001/atm/account/balance?cardNumber=0000") // 🔁 Replace with your actual API URL
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(response,"lllll")
        setBalance(response[0])
      })
      .then((data) => {
        setBalance(data.balance); // ✅ Adjust if your response structure is different
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Typography variant="h5" mb={2}>Your Balance</Typography>
      <Typography variant="h6" mb={4}>
        {loading ? "Loading..." : `$${balance}`}
      </Typography>
      <Button
        variant="contained"
        fullWidth
        sx={backButtonStyle}
        onClick={() => setScreen("home")}
      >
        Back
      </Button>
    </>
  );
}

const backButtonStyle = {
  backgroundColor: "#6c757d",
  "&:hover": { backgroundColor: "#5a6268" },
};

export default CheckBalance;
