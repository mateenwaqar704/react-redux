


import React, { Component } from 'react'

 class Demo extends Component {
    constructor(props){

        super(props);
        this.state={
        
            username: "",

        };

     
       
    }


    updateInput = (event) => {
        this.setState({username : event.target.value})
        }
        
    handleSubmit = () => {
      this.props.updateUsername(this.state.username)
        
        }

    render() {
        return (
            <div>
    <input type="text" onChange={this.updateInput}></input>
    <input type="submit" onClick={this.handleSubmit} ></input>
    </div>
        )
    }
}

export default Demo




