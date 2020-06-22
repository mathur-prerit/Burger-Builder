import React, { Component } from "react";
import { connect } from "react-redux";
import {IncrementQuantity,DecrementQuantity} from "../actions/actions.js"
class BurgerOrder extends Component {
  render() {
    let ingredients = Object.keys(this.props.items).map((item) => {
      return (
        <div className="flex-class" key={item}>
          <button onClick={() => this.props.DecrementQuantity(item)}>-</button>
          <div>{item.replace(item[0], item[0].toUpperCase())}</div>
          <button onClick={() => this.props.IncrementQuantity(item)}>
            +
          </button>
        </div>
      );
    });
    return <div>{ingredients}</div>;
  }
}

const mapDispatchToProps = {
    IncrementQuantity,
    DecrementQuantity
};

export default connect(null, mapDispatchToProps)(BurgerOrder);
