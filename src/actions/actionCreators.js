import * as ACTION_TYPES from "./actionTypes";

import api from "./api";

export const buyStock = (ownedProperty, amountBought) => (dispatch) => {
    // api.ownedProperty
    //     .update(ownedProperty.id, {
    //         ...ownedProperty,
    //         stock: ownedProperty.stock + amountBought,
    //     })
    //     .then((res) => {
    //         dispatch({
    //             type: ACTION_TYPES.BUY_MYPROPERTY_STOCK,
    //             payload: { id: ownedProperty.id, amountBought },
    //         });
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    console.log(ownedProperty, amountBought, dispatch);
    dispatch({
        type: ACTION_TYPES.BUY_MYPROPERTY_STOCK,
        payload: { id: ownedProperty.id, amountBought },
    });
};

export const sellStock = (ownedProperty, amountSold) => (dispatch) => {
    // api.ownedProperty
    //     .update(ownedProperty.id, {
    //         ...ownedProperty,
    //         stock: ownedProperty.stock - amountSold,
    //     })
    //     .then((res) => {
    //         dispatch({
    //             type: ACTION_TYPES.SELL_MYPROPERTY_STOCK,
    //             payload: { id: ownedProperty.id, amountSold },
    //         });
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    dispatch({
        type: ACTION_TYPES.SELL_MYPROPERTY_STOCK,
        payload: { id: ownedProperty.id, amountSold },
    });
};

export const fetchMyPropertyData = () => (dispatch) => {
    api.ownedProperty
        .fetchAll()
        .then((res) => {
            dispatch({
                type: ACTION_TYPES.GET_MYPROPERTY_DATA,
                payload: { ownedProperty: res.data },
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

export const fetchMyWalletData = () => (dispatch) => {
    api.wallet
        .fetch()
        .then((res) => {
            dispatch({
                type: ACTION_TYPES.GET_MYWALLET_DATA,
                payload: { myWallet: res.data },
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
