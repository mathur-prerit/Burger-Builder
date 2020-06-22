import * as actionTypes from "../actions/actionTypes.js";

const initalState = {
  ingredients: {
    bacon: 0,
    salad: 0,
    cheese: 0,
    meat: 0,
  },
  price: 100,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.INCREASEQUANTITY:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload.item]:
            state.ingredients[action.payload.item] + action.payload.value,
        },
      };

    case actionTypes.DECREASEQUANTITY:
      if (state.ingredients[action.payload.item] <= 0) {
        return state;
      } else {
        return {
          ...state,
          ingredients: {
            ...state.ingredients,
            [action.payload.item]:
              state.ingredients[action.payload.item] - action.payload.value,
          },
        };
      }

    default:
      return state;
  }
};

export default reducer;
