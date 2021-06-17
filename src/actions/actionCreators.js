import * as ACTION_TYPES from "./actionTypes";

export function buyStock(id, amountBought) {
    return {
        type: ACTION_TYPES.BUY_MYPROPERTY_STOCK,
        payload: { id, amountBought },
    };
}

export function buyStock(id, amountSold) {
    return {
        type: ACTION_TYPES.SELL_MYPROPERTY_STOCK,
        payload: { id, amountSold },
    };
}
