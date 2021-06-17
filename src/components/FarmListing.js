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
                    <Grid item xs={2}>
                        <h1>Address</h1>
                    </Grid>
                    <Grid item xs={2}>
                        worth
                    </Grid>
                    <Grid item xs={2}>
                        stock
                    </Grid>
                    <Grid item xs={2}>
                        investment return
                    </Grid>
                    <Grid item xs={2}>
                        current price
                    </Grid>
                    <Grid item xs={2}>
                        select btn
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default FarmListing;
