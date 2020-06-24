import React, { Component } from "react";
import BurgerIngredients from "./BurgerIngredients";

class BurgerSection extends Component {
  render() {
    let ingredientsList = Object.keys(this.props.items).map((item) => {
      return [...Array(this.props.items[item])].map((list, i) => {
        return(
        <BurgerIngredients key={item+i} type={item}/>
        )
      });
    });
    return (
    <div className="burger-container">
        <BurgerIngredients type="breadTop"/>
        {ingredientsList}
        <BurgerIngredients type="breadBottom"/>
    </div>);
  }
}

export default BurgerSection;
