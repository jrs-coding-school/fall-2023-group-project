import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    // collect form input data
    const formData = {
      username,
      password,
    };
    console.log("formData:", formData);
    // send to the api to create an account
    try {
      const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:9000";
      const response = await fetch(`${baseUrl}/users/login`, {
        method: "POST",
        headers: {
          // The format for username + password auth is "Basic username:password"
          // where username:password is encoded as a base64 string
          // the btoa global method is used to create a base64 encoded strings
          Authorization: `Basic ${window.btoa(
            `${formData.username}:${formData.password}`
          )}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to login");
      }
      const data = await response.json();
      console.log("login successful!", data);
      // get token from response body
      const token = data.token;
      // save the token given by the server for later fetch requests
      localStorage.setItem("token", token);
      // in the future we can use the "token" variable saved in local/storage to check if a user is logged in

      // state change to render dialog
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };
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
        <TextField
          id="filled-basic"
          label="Username"
          variant="filled"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField 
          id="login-password" 
          label="Password" 
          variant="filled"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleClick}>Login</Button>

        <Link to="./register" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "purple", color: "white" }}
          >
            No Account? Sign up!
          </Button>
        </Link>
      </Box>
    </div>
  );
}
export default Login;
