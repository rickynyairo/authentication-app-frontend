import React, { Component } from 'react';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import './App.css';
import SigninScreen from './SigninScreen';
// injectTapEventPlugin();

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
    }
  }
  componentDidMount(){
    console.log('whatuuuuuuup')
    var loginPage =[];
    loginPage.push(<SigninScreen parentContext={this} key={`${Date.now()}`}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
      </div>
    );
  }
}
export default App;