import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import { useState } from "react";
import {
  FormHelperText,
  Grid,
  TextField,
} from "@mui/material";
import "../App.css";
import { Link } from "react-router-dom";
// import RegisterModal from "./RegisterModal";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import SnackBar from "./SnackBar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.default",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const LoginModal = ({ open, closeModal, toRegister }) => {
  // const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setOpenAlert(true);
      closeModal();
    } catch (error) {
      setErrorMessage(error.message.split(": ").pop());
      setErrorAlert(true);
    }
  };

  // When login success
  const [openAlert, setOpenAlert] = React.useState(false);
  const [errorAlert, setErrorAlert] = React.useState(false);
  // const [loginSuccess, setLoginSuccess] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
    setErrorAlert(false);
  };

  return (
    <div>
      <Modal open={open} onClose={closeModal}>
        <Box sx={style} className="box-modal">
          <Typography variant="h5" component="h1" sx={{ mb: 4 }}>
            Sign in
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                border: "1px solid #000",
              }}
            >
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="filled"
                type="email"
                fullWidth
              />
            </Box>
            <FormHelperText sx={{ mb: 2 }}>
              Silakan masukkan alamat email yang valid
            </FormHelperText>
            <Box
              sx={{
                border: "1px solid #000",
              }}
            >
              <TextField
                id="password"
                name="password"
                label="Password"
                variant="filled"
                type="password"
                fullWidth
                borderColor="black"
              />
            </Box>
            <FormHelperText sx={{ mb: 2 }} id="email-helper-text">
              Silakan masukkan password Anda
            </FormHelperText>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mb: 2 }}
            >
              Sign in
            </Button>
          </form>
          <Grid container>
            <Grid item>
              <Link onClick={closeModal && toRegister} to={"#"}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <SnackBar
        openAlert={openAlert}
        handleClose={handleClose}
        message={"Login berhasil"}
        severity="success"
      />
      <SnackBar
        openAlert={errorAlert}
        handleClose={handleClose}
        message={errorMessage}
        severity="error"
      />
    </div>
  );
};

export default LoginModal;
