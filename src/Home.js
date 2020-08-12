import React, { Component } from 'react';
import fire from './config/firebase';
import Form from './Form'

class Home extends Component{
    constructor(props)
    {
        super(props) 
        this.state={
            
        }
    }
    logout(){
        fire.auth().signOut();
    }
    render()
    {
        return(
            <div>
               <Form/>
               <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Home;