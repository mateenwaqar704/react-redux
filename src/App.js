import "./App.css";
import React, { Component } from "react";
import Person from "./Components/Person";
import Demo from "./Components/Demo";
import Sami from "./Components/Sami";
import Count from "./Components/Count";
import First from "./Components/First";
import Slide from "./Components/Slide";
import Footer from "./Components/Footer";
import Counter from "./Components/Counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: "Testing",
      username: "",
      age: "",
    };
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  buttonClickHandler() {
    console.log(this.state);
  }

  updateUsername = (_userame) => {
    this.setState({ username: _userame });
  };

  render() {
    return (
    //   <div className="App">
    //     {/* <Person name={this.state.username} age={this.state.age}/>
    //  <button type="button" onClick = { this.buttonClickHandler}>Click Me </button>

    //  <Demo name={this.state.username} updateUsername={this.updateUsername}/> */}

    //     {/* <Sami /> */}

    //     {/* <Count /> */}
    //     <>
    //       <First />
    //     </>
    //     <>
    //       <Slide
    //         name="First Slide"
    //         p="Lorem Ipsum is simply dummy text of the printing 
    //    and typesetting industry  Lorem Ipsum has been the industrys
    //     standard dummy 
    //    text ever since the 1500 s when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    //       />

    //       <Footer />
    //     </>
    //   </div>




    <Counter />
    );
  }
}
export default App;
