import React from "react";
import styles from "./Input.module.css"

const InputItems = (props) => {
  let InputField = null;
  let inputClasses=[styles.InputField]
  let validationError = null;

  if(props.invalid && props.shouldBeChecked && props.touched){
    inputClasses.push(styles.Invalid)
    validationError = <p>Please enter {props.elementConfig.placeholder} valid</p>;
  }


  switch (props.elementType) {
    case "input":
      InputField = (
        <input
        className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.valueChange}
        />
      );
      break;
    case "select":
      InputField = (
        <select value={props.value} onChange={props.valueChange}>
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      InputField = (
        <input
        className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.valueChange}
        />
      );
  }
  return (
    <div>
      <label>{props.label}</label>
      {InputField}
      {validationError}
    </div>
  );
};

export default InputItems;
