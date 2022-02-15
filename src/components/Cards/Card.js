import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
export const Cards = ({
  data: { confirmed, deaths, lastUpdate, recoverd },
}) => {
  if (!confirmed) {
    return <div>loading</div>;
  }
  return (
    <div className="container">
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">{confirmed.value}</Typography>
            <Typography color="textSecondary">Real Date</Typography>
            <Typography varient="body2">
              Number of active cases in covid -19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5"></Typography>
            <Typography color="textSecondary">Real Date</Typography>
            <Typography varient="body2">
              Number of Recovered cases in covid -19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">{deaths.value}</Typography>
            <Typography color="textSecondary">Real Date</Typography>
            <Typography varient="body2">
              Number of Deaths in covid -19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
