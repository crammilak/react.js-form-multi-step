import React, { Component } from "react";

class ConfirmProfile extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { name, email, phone, facebook, twitter, github } = this.props.values;
    return (
      <div className="form-container">
        <h1 className="mb-5">Confirmed</h1>
        <ul className="list-group">
          <li className="list-group-item">Name: {name}</li>
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
          <li className="list-group-item">
            Facebook URL: <a href="#">{facebook}</a>
          </li>
          <li className="list-group-item">
            Twitter URL: <a href="#">{twitter}</a>
          </li>
          <li className="list-group-item">
            Github URL: <a href="#">{github}</a>
          </li>
        </ul>
        <br />
        <div className="row">
          <div className="col-6 text-left">
            <button className="btn btn-danger" onClick={this.back}>
              Back
            </button>
          </div>
          <br />
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

export default ConfirmProfile;
