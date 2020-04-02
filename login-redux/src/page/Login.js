import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Login extends React.Component {
  state = {
    email: "",
    password: "",

    error: {},
    home: false
  };

  componentDidMount() {
    console.log(this.props.auth.user, this.props.history);
  }
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    let { email, password } = this.state;
    event.preventDefault();
    if (
      email === this.props.auth.user.email &&
      password === this.props.auth.user.password
    ) {
      this.setState({ home: true });
    } else {
      alert("Invalid login information");
    }
    console.log(this.state.email);
  };
  render() {
    let { name, email, password, confirmPassword, home } = this.state;
    const loginPage = (
      <div className="col-md-6 offset-md-3">
        <h1 className="text-center display-4">Login Here</h1>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="email"> Email: </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              id="email"
              value={email}
              onChange={this.changeHandler}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password"> Password: </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              id="password"
              value={password}
              onChange={this.changeHandler}
              className="form-control"
            />
          </div>

          <Link to="/register">Don't Have Account? Register Here</Link>
          <button className="btn btn-primary my-3 d-block">Login</button>
        </form>
      </div>
    );

    const homePage = (
      <div className="col-md-6 offset-md-3">
        <h3 className="text-center display-4">
          Welcome {this.props.auth.user.name}
        </h3>
        <Link to="/register">Logout</Link>
      </div>
    );
    return (
      <div className="container">
        <div className="row">{home ? homePage : loginPage}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(Login);
