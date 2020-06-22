import * as actionTypes from '../actions/actions.js'

const initalState = {
    ingredients:{
      bacon:1,
      salad:2,
      cheese:1,
      meat:2,
      
    }
};

const reducer = (state = initalState, action) => {
  console.log(action)
  switch (action.type) {
    case actionTypes.INCREASEQUANTITY:
      console.log(12345)
      return state;

    case actionTypes.DECREASEQUANTITY:
      return state;
    
      default:
      return state;
  }
};

export default reducer;
