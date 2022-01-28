import React, { Component } from "react";
import AccountSetup from "./AccountSetup";
import ConfirmProfile from "./ConfirmProfile";
import SocialProfile from "./SocialProfile";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      name: "",
      email: "",
      phone: "",
      password: "",
      facebook: "",
      twitter: "",
      github: "",
    };
  }

  handleNextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  handlePrevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleInputChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    const { step } = this.state;
    const { name, email, phone, password, facebook, twitter, github } =
      this.state;
    const values = { name, email, phone, password, facebook, twitter, github };

    switch (step) {
      case 1:
        return (
          <AccountSetup
            nextStep={this.handleNextStep}
            inputChange={this.handleInputChange}
            values={values}
          />
        );
      case 2:
        return (
          <SocialProfile
            nextStep={this.handleNextStep}
            prevStep={this.handlePrevStep}
            inputChange={this.handleInputChange}
            values={values}
          />
        );
      case 3:
        return (
          <ConfirmProfile
            nextStep={this.handleNextStep}
            prevStep={this.handlePrevStep}
            values={values}
          />
        );
    }
  }
}

export default Form;
