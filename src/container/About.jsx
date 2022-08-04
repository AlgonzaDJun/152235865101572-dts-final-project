import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div style={{ marginTop: "70px", marginBottom: "50vh" }}>
      {/* About Page */}
      <Typography gutterBottom variant="h3" align="center">
        AJ STORE
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              About Us
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              This is a simple React-App that is used to store products and
              customers.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default About;
