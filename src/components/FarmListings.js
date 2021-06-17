import React from "react";
import { connect } from "react-redux";

const FarmListings = (props) => {
    return <div>{JSON.stringify(props.ownedProperties)}</div>;
};

const mapStateToProps = (state) => ({
    ownedProperties: state.ownedPropertyReducer.ownedProperties,
});

export default connect(mapStateToProps)(FarmListings);
