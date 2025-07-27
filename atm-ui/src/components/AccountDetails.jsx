import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function AccountDetails({ setScreen }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9001/atm/details") // 🔁 Replace with actual endpoint
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch account details");
        return res.json();
      })
      .then((data) => {
        setDetails(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Typography variant="h5" mb={2}>Account Details</Typography>

      {loading ? (
        <Typography>Loading...</Typography>
      ) : details ? (
        <Box sx={{ textAlign: 'left', backgroundColor: '#fff', borderRadius: 1, p: 2, color: '#000', mb: 3 }}>
          <Typography><strong>Balance:</strong> {details.balance} <pre>Rs</pre></Typography>
        </Box>
      ) : (
        <Typography color="error">Failed to load account details.</Typography>
      )}

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

export default AccountDetails;
