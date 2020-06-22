import * as actionTypes from "../actions/actionTypes.js";

export const IncrementQuantity = (item) => ({
  type: actionTypes.INCREASEQUANTITY,
  payload: {
    item: item,
    value: 1,
  },
});

export const DecrementQuantity = (item) => ({
  type: actionTypes.DECREASEQUANTITY,
  payload: {
    item: item,
    value: 1,
  },
});
