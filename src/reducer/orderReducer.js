import * as actionTypes from "../actions/actionTypes.js";
import {fetchOrders} from "../actions/orders"

const initialState = {
  purchased: false,
  orders: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ORDERITEM:
      return {
        ...state,
        purchased: action.payload.ordered,
    };

    case actionTypes.FETCHORDERS:
    let orderlist=fetchOrders()
    console.log(orderlist)
    return {
      orders:orderlist
    }


    default:
      return state;
  }
};


export default orderReducer;
