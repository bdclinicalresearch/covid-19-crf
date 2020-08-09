import React, { Component } from 'react';
import fire from './config/firebase';

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
            
               <h4> Data retrieved from patient record</h4>
               <h4> COVID-19 CRF</h4>
               
               <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Home;