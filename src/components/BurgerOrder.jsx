import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../actions/actions.js";

class BurgerOrder extends Component {
  render() {
    let ingredients = Object.keys(this.props.items).map((item) => {
      return (
        <div className="flex-class" key={item}>
          <button onClick={(item) => this.props.DecrementQuantity(item)}>-</button>
          <div>{item.replace(item[0], item[0].toUpperCase())}</div>
          <button onClick={(item) => this.props.IncrementQuantity(item)}>
            +
          </button>
        </div>
      );
    });
    return <div>{ingredients}</div>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    IncrementQuantity: () =>
      dispatch({
        type: actionTypes.INCREASEQUANTITY,
        // payload: {
        //   item: item,
        //   value: 1,
        // },
      }),
    DecrementQuantity: () =>
      dispatch({
        type: actionTypes.DECREASEQUANTITY,
        // payload: {
        //   item: item,
        //   value: 1,
        // },
      }),
  };
};

export default connect(null, mapDispatchToProps)(BurgerOrder);
