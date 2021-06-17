import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
    },
}));
const FarmListing = ({ ownedProperty }) => {
    const classes = useStyles();

    const formatMoney = (money) => {
        return money.toFixed(2);
    };
    const formatPercentage = (percentage) => {
        return percentage.toFixed(1);
    };
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container alignContent="center" alignItems="center">
                    <Grid item xs={12} sm={5}>
                        <h1 className={""}>{ownedProperty.address}</h1>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                        <h2>{formatMoney(ownedProperty.totalWorth)}$</h2>
                    </Grid>
                    <Grid item xs={3} sm={1}>
                        {formatMoney(ownedProperty.stock)}
                    </Grid>
                    <Grid item xs={3} sm={1}>
                        {formatPercentage(ownedProperty.investmentReturn)}%
                    </Grid>
                    <Grid item xs={3} sm={1}>
                        {formatMoney(ownedProperty.currentPrice)}$
                    </Grid>

                    <Grid item xs={3} sm={1}></Grid>
                    <Grid item xs={12} sm={1}>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            fullWidth
                        >
                            Select
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default FarmListing;
