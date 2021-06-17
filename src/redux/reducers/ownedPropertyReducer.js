import * as ACTION_TYPES from "../../actions/actionTypes";

const initialState = { ownedProperties: [], myWallet: { data: "Hi" } };

export default function ownedPropertyReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.BUY_MYPROPERTY_STOCK: {
            return {
                ...state,
                ownedProperties: state.ownedProperties.map((property) =>
                    property.id === action.payload.id
                        ? {
                              ...property,
                              stock:
                                  property.stock + action.payload.amountBought,
                          }
                        : property
                ),
                myWallet: {
                    funds:
                        state.myWallet.funds -
                        action.payload.amountBought *
                            state.ownedProperties.find(
                                (property) => action.payload.id === property.id
                            ).currentPrice,
                },
            };
        }
        case ACTION_TYPES.SELL_MYPROPERTY_STOCK: {
            return {
                ...state,
                ownedProperties: state.ownedProperties.map((property) =>
                    property.id === action.payload.id
                        ? {
                              ...property,
                              stock: property.stock - action.payload.amountSold,
                          }
                        : property
                ),
                myWallet: {
                    funds:
                        state.myWallet.funds +
                        action.payload.amountBought *
                            state.ownedProperties.find(
                                (property) => action.payload.id === property.id
                            ).currentPrice,
                },
            };
        }
        default:
            return state;
    }
}
