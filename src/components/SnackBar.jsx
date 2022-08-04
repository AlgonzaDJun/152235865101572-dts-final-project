import { Alert, Snackbar, Stack } from "@mui/material";
import React from "react";

const SnackBar = ({ openAlert, handleClose, message, severity }) => {
  return (
    <div>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={openAlert}
          autoHideDuration={4000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={severity}
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
};

export default SnackBar;
