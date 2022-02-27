import React, { Component } from 'react'

 class Person extends Component {

    constructor(props){

        super(props);
        this.props = props;
       
    }
    
   

    
 
    
    render() {
      
        return (
            <div>
             
             <label>Name : {this.props.name}</label>
             <br />
             <label>Age : {this.props.age}</label>
           
            </div>

            
        );
    }
}

export default Person
