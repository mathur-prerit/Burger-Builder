import React, { Component } from "react";
import { connect } from "react-redux";
import { IncrementQuantity, DecrementQuantity } from "../actions/actions.js";
class BurgerOrder extends Component {
  render() {
    let ingredients = Object.keys(this.props.items).map((item) => {
      return (
        <div className="flex-class" key={item}>
          <button onClick={() => this.props.DecrementQuantity(item)}>-</button>
          <div>{item.replace(item[0], item[0].toUpperCase())}</div>
          <button onClick={() => this.props.IncrementQuantity(item)}>+</button>
        </div>
      );
    });

    return (
      <div>
        <div style={{ width: "20%", margin: "2% auto" }}>
          <div
            className="flex-class"
            style={{ justifyContent: "center", margin: "2% 0" }}
          >
            Price: &#8377; {`${this.props.price}`}
          </div>
          {ingredients}
          <button className="flex-class" style={{ margin: "2% auto" }} disabled={this.props.price <= 100} onClick={()=>this.props.modalToggle(true)}>
            Process Order
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  IncrementQuantity,
  DecrementQuantity,
};

export default connect(null, mapDispatchToProps)(BurgerOrder);
