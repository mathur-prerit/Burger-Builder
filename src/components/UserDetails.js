import React, { Component } from "react";
import InputItems from "./input";
// import OrderButton from "./OrderButton.jsx";
import { connect } from "react-redux";
import axios from "../axios/axios-config.js";

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
      },
      address: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Address",
        },
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Email",
        },
        value: "",
      },
      mobile: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Phone",
        },
        value: "",
      },
      addressType: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "home", displayValue: "Residental" },
            { value: "office", displayValue: "Commerical" },
          ],
        },
        value: "",
      },
    },
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
    axios.post('/orders.json',{
        data:finalData
    }).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
  };

  inputChangedHandler = (e, id) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };

    const updatedFormElement = {
      ...updatedOrderForm[id],
    };

    updatedFormElement.value = e.target.value;
    updatedOrderForm[id] = updatedFormElement;
    this.setState({ orderForm: updatedOrderForm });
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
                    valueChange={(e) =>
                      this.inputChangedHandler(e, formElement.id)
                    }
                  />
                );
              })}
              {/* <OrderButton/> */}
              <button>Order Now!</button>
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
  // console.log(state)
  return {
    price: state.reducer.price,
    purchased: state.orderReducer.purchased,
    indgredients: state.reducer.ingredients,
  };
};

export default connect(mapStateToProps)(UserDetails);
