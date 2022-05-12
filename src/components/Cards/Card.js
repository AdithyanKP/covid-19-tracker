import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import CountUp from "react-countup"; //for live counting
import cx from "classnames"; //combining two style classses
import styles from "./Card.module.css";

export const Cards = ({
  data: { confirmed, deaths, lastUpdate, recoverd },
}) => {
  if (!confirmed) {
    return <div>loading</div>;
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          className={cx(styles.Card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>

            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography varient="body2">
              Number of active cases in covid -19
            </Typography>
          </CardContent>
        </Grid>
        {/*  <Grid
          item
          component={Card}
          className={cx(styles.Card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5"></Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography varient="body2">
              Number of Recovered cases in covid -19
            </Typography>
          </CardContent>
        </Grid> */}
        <Grid item component={Card} className={cx(styles.Card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography varient="body2">
              Number of Deaths in covid -19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
