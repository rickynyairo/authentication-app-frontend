import React, { Component } from 'react';
import { MuiThemeProvider, AppBar, Button as RaisedButton, TextField } from '@material-ui/core'
import { API_URL } from './constants';
import axios from 'axios';
import Signin from './Signin';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      email: '',
      password: ''
    }
  }
  handleClick(event) {
    console.log("values", this.state.first_name, this.state.last_name, this.state.email, this.state.password);
    //To be done:check for empty values before hitting submit
    let self = this;
    let payload = {
      "first_name": this.state.first_name,
      "last_name": this.state.last_name,
      "email": this.state.email,
      "password": this.state.password
    }
    axios.post(`${API_URL}/auth/signup`, payload)
      .then(function (response) {
        console.log(response);
        if (response.data.code === 201) {
          //  console.log("registration successfull");
          let loginscreen = [];
          loginscreen.push(<Signin parentContext={this} />);
          let loginmessage = "Not Registered yet.Go to Signup";
          self.props.parentContext.setState({
            loginscreen: loginscreen,
            loginmessage: loginmessage,
            buttonLabel: "Signup",
            isLogin: true
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Signup"
            />
            <TextField
              hintText="Enter your Name"
              floatingLabelText="First Name"
              onChange={(event, newValue) => this.setState({ name: newValue })}
            />
            <br />
            <TextField
              hintText="Enter your username"
              floatingLabelText="Last Name"
              onChange={(event, newValue) => this.setState({ username: newValue })}
            />
            <br />
            <TextField
              hintText="Enter your Email"
              type="email"
              floatingLabelText="Email"
              onChange={(event, newValue) => this.setState({ email: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Signup;