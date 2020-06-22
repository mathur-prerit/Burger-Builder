import React from "react";
import styles from "./BurgerSection.module.css";

const BurgerIngredients = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "breadTop":
      ingredient = (<div className={styles.Breadtop}>&nbsp;</div>);
      break;

    case "breadBottom":
      ingredient = (<div className={styles.Breadbottom}>&nbsp;</div>);
      break;

    case "salad":
      ingredient = (<div className={styles.Salad}>&nbsp;</div>);
      break;

    case "bacon":
      ingredient = (<div className={styles.Bacon}>&nbsp;</div>);
      break;

    case "cheese":
      ingredient = (<div className={styles.Cheese}>&nbsp;</div>);
      break;

    case "meat":
      ingredient = (<div className={styles.Meat}>&nbsp;</div>);
      break;

    default:
    ingredient = null;
  }

    return (ingredient) 
};

export default BurgerIngredients;
