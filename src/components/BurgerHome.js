import React, { Component } from "react";
import { connect } from "react-redux";
import BurgerSection from "./BurgerSection";
import BurgerOrder from "./BurgerOrder";
import NavBar from "./NavBar";

class BurgerHome extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <BurgerSection items={this.props.items}/>
        <BurgerOrder items={this.props.items}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      items:state.ingredients
  }
};

export default connect(mapStateToProps)(BurgerHome);
