import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../store/actions/auhAction";

class Register extends React.Component {
  state = {
    name: "abm",
    email: "",
    password: "",
    confirmPassword: "",
    error: {}
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    let { email, name, password } = this.state;
    this.props.register({ name, email, password });
  };
  render() {
    let { name, email, password, error } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="text-center display-4">Register Here</h1>
            <form onSubmit={this.submitHandler}>
              <div className="form-group">
                <label htmlFor="name"> Name: </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  id="name"
                  value={name}
                  onChange={this.changeHandler}
                  className="form-control"
                />
                {/* {error.name && (
                <div className="invalid-feedback">{error.name}</div>
              )} */}
              </div>
              <div className="form-group">
                <label htmlFor="email"> Email: </label>
                <input
                  type="email"
                  // className={
                  //   error.email ? "form-control is-invalid" : "form-control"
                  // }
                  placeholder="Enter Your Email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={this.changeHandler}
                  className="form-control"
                />
                {/* {error.email && (
                <div className="invalid-feedback">{error.email}</div>
              )} */}
              </div>
              <div className="form-group">
                <label htmlFor="password"> Password: </label>
                <input
                  type="password"
                  // className={
                  //   error.password ? "form-control is-invalid" : "form-control"
                  // }
                  placeholder="Enter Your Password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={this.changeHandler}
                  className="form-control"
                />
                {/* {error.password && (
                <div className="invalid-feedback">{error.password}</div>
              )} */}
              </div>

              <Link to="/login">Already Have Account? Login Here</Link>
              <button className="btn btn-primary my-3 d-block">Register</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { register })(Register);
