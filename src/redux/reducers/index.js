import { combineReducers } from "redux";
import ownedPropertyReducer from "./ownedPropertyReducer";

export const recucers = combineReducers(ownedPropertyReducer);
