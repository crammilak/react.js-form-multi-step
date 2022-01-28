import React, { Component } from "react";

class SocialProfile extends Component {
  componentDidMount() {
    console.log(this.props.values);
  }
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, inputChange } = this.props;
    return (
      <div className="form-container">
        <h1 className="mb-5">Account Setup</h1>
        <div className="form-group">
          <label htmlFor="name">Facebook URL</label>
          <input
            type="text"
            className="form-control"
            name="facebook"
            onChange={inputChange("facebook")}
            value={values.facebook}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Twitter URL</label>
          <input
            type="text"
            className="form-control"
            name="twitter"
            onChange={inputChange("twitter")}
            value={values.twitter}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Github URL</label>
          <input
            type="text"
            className="form-control"
            name="github"
            onChange={inputChange("github")}
            value={values.github}
          />
        </div>

        <div className="row">
          <div className="col-6 text-left">
            <button className="btn btn-danger" onClick={this.back}>
              Back
            </button>
          </div>
          <div className="col-6 text-right">
            <button className="btn btn-primary" onClick={this.continue}>
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialProfile;
