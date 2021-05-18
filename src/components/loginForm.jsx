import React, { Component } from "react";
import Input from "./common/input";

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
    console.log(account);
  }

  // password = React.createRef()\\\
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
          <Input
            name={"username"}
            onChange={this.handleChange}
            value={account.username}
            label={"Username"}
          />
          <Input
            name={"password"}
            onChange={this.handleChange}
            value={account.password}
            label={"Password"}
          />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
