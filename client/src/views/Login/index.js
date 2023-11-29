import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Slide from '@mui/material/Slide';
import { login } from "../../utility/api";
import { setToken } from "../../utility/utils";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleClick = async () => {
    // collect form input data
    const formData = {
      username,
      password,
    };
    console.log("formData:", formData);
    // send to the API to create an account
    try {
      const data = await login(formData);
      console.log("login successful!", data);
      // get token from response body
      const token = data.token;
      // save the token given by the server for later fetch requests
      setToken(token);
      // set isLoggedIn to true upon successful login
      setIsLoggedIn(true);
      // Open the Snackbar upon successful login
      setOpenSnackbar(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <Link to="/homepage"><Button variant="contained">Homepage</Button></Link>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "65vh",
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
            <Button variant="contained" onClick={handleClick}>
              Login
            </Button>

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
      )}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}//timer for how long the snackbar stays
        onClose={handleSnackbarClose}  TransitionComponent={Slide} //slide transition for snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MuiAlert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Successfully logged in!
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

export default Login;
