import React, { Component } from "react";
import Count1 from "./Count1";

export class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  clickHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <>
        <div>
          <button onClick={this.clickHandler}> Count</button>
        </div>
        {/* <div>{this.state.count}</div> */}

        <Count1 sami={this.state.count} />
      </>
    );
  }
}

export default Count;
