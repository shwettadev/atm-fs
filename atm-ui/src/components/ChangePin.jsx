import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

function ChangePin({ setScreen }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [pin, setPin] = useState("");

  const handlePinChange = () => {
   
    setLoading(true);
    setMessage("");

    // Build URL with parameters
    const url = `http://localhost:9001/atm/updatePin?pin=${pin}`;

    fetch(url, {
      method: "POST",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to change PIN");
        setMessage("PIN change successfully!");
      })

      .catch((err) => {
        console.error(err);
        setMessage("Failed.");
      })
      .finally(() => {
        setLoading(false);
      });
  };


  return (
    <>
      <Typography variant="h5" mb={2}>Change PIN</Typography>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Enter PIN"
        type="number"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
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
        onClick={handlePinChange}
        disabled={loading}
      >
        {loading ? "Processing..." : "Continue"}
      </Button>

      <Button
        variant="contained"
        fullWidth
        sx={backButtonStyle}
        onClick={() => {
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

export default ChangePin;
