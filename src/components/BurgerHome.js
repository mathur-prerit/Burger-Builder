import React, { Component } from "react";
import { connect } from "react-redux";
import BurgerSection from "./BurgerSection";
import BurgerOrder from "./BurgerOrder";
import NavBar from "./NavBar";
import UserDetails from "./UserDetails"

class BurgerHome extends Component {

  state={
    modal:false
  }

  modalToggle=(value)=>{
    if(this.state.modal!==value){
      this.setState({modal:value},() => {
        console.log('modal toggled')
       })
    }
  }
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <BurgerSection items={this.props.items}/>
        <BurgerOrder items={this.props.items} price={this.props.price} modal={this.state.modal} modalToggle={this.modalToggle}/>
        <UserDetails modal={this.state.modal} modalToggle={this.modalToggle}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      items:state.reducer.ingredients,
      price:state.reducer.price,
      purchased:state.orderReducer.purchased
  }
};

export default connect(mapStateToProps)(BurgerHome);
