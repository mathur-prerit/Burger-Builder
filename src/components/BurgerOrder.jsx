import React, { Component } from "react";
import { connect } from "react-redux";
import { IncrementQuantity, DecrementQuantity } from "../actions/actions.js";
class BurgerOrder extends Component {
  render() {
    let ingredients = Object.keys(this.props.items).map((item) => {
      return (
        <div className="flex-class" key={item}>
          <button className="btn-border" style={{color:"red"}} onClick={() => this.props.DecrementQuantity(item)}><b>-</b></button>
          <div>{item.replace(item[0], item[0].toUpperCase())}</div>
          <button className="btn-border" style={{color:"green"}} onClick={() => this.props.IncrementQuantity(item)}><b>+</b></button>
        </div>
      );
    });

    return (
      <div className="burger-container" style={{backgroundColor:"#ffa64d", margin:"2% 0"}}>
        <div style={{ width: "20%", margin: "2% auto" }}>
          <div
            className="flex-class"
            style={{ justifyContent: "center", margin: "5% 0" }}
          >
            Price:&nbsp;<b>&#8377;{`${this.props.price}`}</b>
          </div>
          {ingredients}
          <button className="flex-class btn-border" style={{ margin: "5% auto",padding:"3%"}} disabled={this.props.price <= 100} onClick={()=>this.props.modalToggle(true)}>
            <b>Process Order</b>
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
