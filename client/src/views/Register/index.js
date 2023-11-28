//** Import Statements
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Grid, Typography, Button } from "@mui/material";

//** Setup (define helper functions and variables here)

function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleClick = async () => {
    // collect form input data
    const formData = {
      username,
      email,
      password,
    };
    console.log("formData:", formData);
    // send to the api to create an account
    try {
      const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:9000";
      const response = await fetch(`${baseUrl}/users/register`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to register");
      }
      const data = await response.json();
      console.log("registration successful!", data);
      setIsRegistered(true);
    } catch (error) {
      console.error(error);
    }
  };

  //** Return JSX
  return (
    <Container maxWidth={"xs"}>
      <Typography variant="h3">Registration Page</Typography>
      <Grid
        className="register-form"
        container
        flexDirection={"column"}
        rowGap={2}
      >
        {/* username */}
        <TextField
          id="username_field"
          label="User Name"
          variant="filled"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* email */}
        <TextField
          id="email_field"
          label="E-mail"
          variant="filled"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* password */}
        <TextField
          id="password_field"
          label="Password"
          variant="filled"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* register button */}
        <Button variant="contained" onClick={handleClick} Link>
          Register
        </Button>
      </Grid>
    </Container>
  );
}
export default Register;
