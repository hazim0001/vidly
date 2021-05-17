import React, { Component } from "react";

class LoginForm extends Component {
  constructor() {
    super();
    this.hanleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    account: { username: "", password: "" },
  };

  handleChange(event) {
    const account = { ...this.state.account };
    account[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ account });
  }

  // password = React.createRef()
  // to get the date inside the form
  username = React.createRef();
  handleSubmit(event) {
    event.preventDefault();
    const username = this.username.current.value;
    // console.log(username);
  }
  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              //   autoFocus
              value={account.username}
              onChange={this.handleChange}
              ref={this.username}
              id="username"
              name="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.handleChange}
              id="password"
              name="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
