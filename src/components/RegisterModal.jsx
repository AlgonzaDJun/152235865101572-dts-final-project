import React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { FormHelperText, Grid, TextField } from "@mui/material";
import "../App.css";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
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

const RegisterModal = ({ open, closeModal, toLogin }) => {
  // const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setOpenAlert(true);
      closeModal();
    } catch (error) {
      setErrorMessage(error.message.split(": ").pop());
      setErrorAlert(true);
    }
  };

  //   alert register
  const [openAlert, setOpenAlert] = React.useState(false);
  const [errorAlert, setErrorAlert] = React.useState(false);

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
            Register
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="filled"
              type="email"
              fullWidth
            />
            <FormHelperText sx={{ mb: 2 }}>
              Silakan masukkan alamat email yang valid
            </FormHelperText>
            <TextField
              id="password"
              name="password"
              label="Password"
              variant="filled"
              type="password"
              fullWidth
            />
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
              Sign Up
            </Button>
          </form>
          <Grid container>
            <Grid item>
              <Link onClick={ closeModal && toLogin} to="#">
                {"have an account? Login"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <SnackBar
        openAlert={openAlert}
        handleClose={handleClose}
        message={"Register berhasil"}
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

export default RegisterModal;
