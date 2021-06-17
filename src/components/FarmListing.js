import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        textAlign: "left",
        color: theme.palette.text.secondary,
    },
}));
const FarmListing = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container>
                    <Grid item xs={8}>
                        <h1>Address Maple drive</h1>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container>
                            <Grid item xs={12}>
                                <h2>73.32$ Total Owned</h2>
                            </Grid>
                            <Grid item xs={12}>
                                1.54 Stock
                            </Grid>
                            <Grid item xs={12}>
                                34% Up
                            </Grid>
                            <Grid item xs={12}>
                                Currently 2.5$
                            </Grid>
                            <Grid item xs={12}>
                                select btn
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default FarmListing;
