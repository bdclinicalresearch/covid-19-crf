import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './config/firebase';
import Login from './Login';
import Home from './Home';
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      user : {}
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }

  render(){
    return (
      <div className="App">
        {this.state.user ? (<Home/>) : (<Login/>)}
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

export default App;
