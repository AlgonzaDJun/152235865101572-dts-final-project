import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { FormHelperText, TextField } from "@mui/material";

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

const LoginModal = ({ open, closeModal }) => {
  return (
    <div>
      <Modal open={open} onClose={closeModal}>
        <Box sx={style}>
          <Typography variant="h5" component="h1" sx={{ mb: 4 }}>
            Sign in
          </Typography>
          <form>
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
            <FormHelperText sx={{ mb: 4 }} id="email-helper-text">
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
        </Box>
      </Modal>
    </div>
  );
};

export default LoginModal;
