import React from "react";
import { Link } from "react-router-dom";

class Register extends React.Component {
  state = {
    email: "fff",
    password: "",

    error: {}
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
  };
  render() {
    let { name, email, password, confirmPassword, error } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="text-center display-4">Login Here</h1>
            <form onSubmit={this.submitHandler}>
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

              <Link to="/register">Don't Have Account? Register Here</Link>
              <button className="btn btn-primary my-3 d-block">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
