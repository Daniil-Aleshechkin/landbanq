import React from "react";
import { connect } from "react-redux";

import FarmListing from "./FarmListing";

const FarmListings = (props) => {
    return (
        <div>
            {props.ownedProperties.map((ownedProperty) => {
                return <FarmListing ownedProperty={ownedProperty} />;
            })}
            {console.log(props.ownedProperties)}
        </div>
    );
};

const mapStateToProps = (state) => ({
    ownedProperties: state.ownedPropertyReducer.ownedProperties,
});

export default connect(mapStateToProps)(FarmListings);
