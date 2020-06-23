import * as actionTypes from "../actions/actionTypes.js";

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

    case actionTypes.FETCHEDORDERS:
    return {
      orders:Object.entries(action.orderList)
    }


    default:
      return state;
  }
};


export default orderReducer;
