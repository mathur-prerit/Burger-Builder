import React, { Component } from "react";
import InputItems from "./input";
// import OrderButton from "./OrderButton.jsx";
import { connect } from "react-redux";
import axios from "../axios/axios-config.js";
import { withRouter } from "react-router";

class UserDetails extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
      address: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Address",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Email",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      mobile: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Phone",
        },
        value: "",
        validation: {
          required: true,
          length: true,
        },
        valid: false,
        touched: false,
      },
      addressType: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "home", displayValue: "Residental" },
            { value: "office", displayValue: "Commerical" },
          ],
        },
        value: "home",
        validation: {
          required: false,
        },
        valid: true,
      },
    },
    formIsValid: false,
  };

  checkValidation = (value, rules) => {
    let checkValid = true;

    if (rules.required === true) {
      checkValid = value.trim() !== "" && checkValid;
    }

    if (rules.length === true) {
      checkValid = value.trim().length === 10 && checkValid;
    }

    return checkValid;
  };

  placeOrder = (e) => {
    e.preventDefault();
    const formData = {};
    for (let formelements in this.state.orderForm) {
      formData[formelements] = this.state.orderForm[formelements].value;
    }
    const finalData = {
      indgredients: this.props.indgredients,
      price: this.props.price,
      details: formData,
      purchased: true,
    };
    axios
      .post("/orders.json", {
        data: finalData,
      })
      .then((res) => {
        if (res.status === 200) {
          // this.setState(
          //   (prevState) => {
          //     return {...prevState,
          //     orderFrom:{
          //       ...orderForm,
          //       name:{
          //         ...name,
          //       }
          //     }}
          //   },
          //   () => {
          //     console.log(this.state)
          //     // this.props.history.push("/orders")
          //   }
          // );
          this.props.history.push("/orders")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  inputChangedHandler = (e, id) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };

    const updatedFormElement = {
      ...updatedOrderForm[id],
    };

    updatedFormElement.value = e.target.value;
    updatedFormElement.valid = this.checkValidation(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedOrderForm[id] = updatedFormElement;

    let formValid = true;
    for (let elements in updatedOrderForm) {
      formValid = updatedOrderForm[elements].valid && formValid;
    }

    this.setState({ orderForm: updatedOrderForm, formIsValid: formValid });
  };
  render() {
    const elementsArray = [];
    for (let key in this.state.orderForm) {
      elementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    if (this.props.modal === true) {
      return (
        <div className="modal">
          <div className="modal-content">
            <button
              className="close-btn"
              onClick={() => this.props.modalToggle(false)}
            >
              X
            </button>
            <form style={{ margin: "auto" }} onSubmit={this.placeOrder}>
              {elementsArray.map((formElement) => {
                return (
                  <InputItems
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldBeChecked={formElement.config.validation}
                    touched={formElement.config.touched}
                    valueChange={(e) =>
                      this.inputChangedHandler(e, formElement.id)
                    }
                  />
                );
              })}
              {/* <OrderButton/> */}
              <button disabled={!this.state.formIsValid}>Order Now!</button>
            </form>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    price: state.reducer.price,
    purchased: state.orderReducer.purchased,
    indgredients: state.reducer.ingredients,
  };
};

export default connect(mapStateToProps)(withRouter(UserDetails));
