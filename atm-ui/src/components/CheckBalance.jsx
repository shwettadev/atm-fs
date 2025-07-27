import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function CheckBalance({ setScreen }) {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9001/atm/balance")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(response, "response");
        return response.json(); // ✅ Return the parsed JSON
      })
      .then((data) => {
        console.log(data, "lllll");
        setBalance(data); // ✅ Adjust depending on your API structure
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
