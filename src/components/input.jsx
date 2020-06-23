import React from "react";

const InputItems = (props) => {
  let inputField = null;

  // console.log(props)
  switch (props.elementType) {
    case "input":
      inputField = (
        <input
          {...props.elementConfig}
          value={props.value}
          onChange={props.valueChange}
        />
      );
      break;
    case "select":
      inputField = (
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
      inputField = (
        <input
          {...props.elementConfig}
          value={props.value}
          onChange={props.valueChange}
        />
      );
  }
  return (
    <div>
      <label>{props.label}</label>
      {inputField}
    </div>
  );
};

export default InputItems;
