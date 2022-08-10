import { Alert, AlertTitle, Snackbar, Stack } from "@mui/material";
import React from "react";

const SnackBar = ({ openAlert, handleClose, message, severity }) => {
  return (
    <div>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={openAlert}
          autoHideDuration={4000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleClose}
            severity={severity}
            sx={{ width: "100%" }}
          >
            <AlertTitle
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "white"
              }}
            >
              {severity === "success" ? "Success" : "Error"}
            </AlertTitle>
            {message}
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
};

export default SnackBar;
