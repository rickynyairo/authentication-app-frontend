import React, { Component } from 'react';
import { MuiThemeProvider, AppBar, Button as RaisedButton, TextField } from '@material-ui/core'
import axios from 'axios';
import {API_URL} from './constants';
import HomeScreen from "./HomeScreen";

class Signin extends Component {
  state = {
    usernameOrEmail: '',
    password: ''
  }
  handleClick(event) {
    let self = this;
    let payload = {
      "usernameOrEmail": this.state.usernameOrEmail,
      "password": this.state.password
    }
    axios.post(`${API_URL}/auth/signin`, payload)
      .then(function (response) {
        console.log(response);
        if (response.data.code === 200) {
          console.log("Signin successfull");
          let uploadScreen = [];
          uploadScreen.push(<HomeScreen appContext={self.props.appContext} />)
          self.props.appContext.setState({ loginPage: [], uploadScreen: uploadScreen })
        }
        else{
          console.log("Username password do not match");
          alert("username password do not match")
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
              title="signin"
            />
            <TextField
              hintText="Enter your Username or Email"
              floatingLabelText="Username or Email"
              onChange={(event, newValue) => this.setState({ usernameOrEmail: newValue })}
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
export default Signin;