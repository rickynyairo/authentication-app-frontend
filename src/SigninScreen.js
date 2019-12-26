import React, { Component } from 'react';
import { MuiThemeProvider, Button as RaisedButton } from '@material-ui/core'

import Signin from './Signin';
import Signup from './Signup';

class SigninScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      usernameOrEmail:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      buttonLabel:'Signup',
      isLogin:true
    }
  }
  componentDidMount(){
    let loginscreen=[];
    loginscreen.push(<Signin parentContext={this} appContext={this.props.parentContext}/>);
    let loginmessage = "Not registered yet, Signup Now";
    this.setState({
                  loginscreen:loginscreen,
                  loginmessage:loginmessage
                    })
  }
  handleClick(event){
    // console.log("event",event);
    let loginmessage;
    if(this.state.isLogin){
      let loginscreen=[];
      loginscreen.push(<Signup parentContext={this}/>);
      loginmessage = "Already registered.Go to Signin";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Signin",
                     isLogin:false
                   })
    }
    else{
      let loginscreen=[];
      loginscreen.push(<Signin parentContext={this}/>);
      loginmessage = "Not Registered yet.Go to Signup";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Signup",
                     isLogin:true
                   })
    }
  }
  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div>
               <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default SigninScreen;