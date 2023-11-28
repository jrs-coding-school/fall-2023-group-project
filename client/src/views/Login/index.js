import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicTextFields() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "65vh", // center the form in the middle of the page
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px", // spacing between elements
        }}
      >
        <Typography variant="h2" gutterBottom>
          Login
        </Typography>
        <TextField id="filled-basic" label="Username" variant="filled" />
        <TextField id="filled-basic" label="Password" variant="filled" />
        <Button variant="contained">Login</Button>

        <Button
          variant="contained"
          style={{ backgroundColor: "purple", color: "white" }}
        >
          No Account? Sign up!
        </Button>
      </Box>
    </div>
  );
}
