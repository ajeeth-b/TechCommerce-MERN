import { combineReducers } from "redux";
import editProduct from './products.js'
import cart from "./cart.js";


export default combineReducers({
    editProduct,
    cart,
})