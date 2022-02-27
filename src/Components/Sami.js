import React, { Component } from "react";

export class Sami extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      data: [],
      dataoff: [
        { id: 1, name: "Mateen" },
        { id: 2, name: "agha" },
        { id: 3, name: "sami" },
      ],
    };
  }
  changeHandler = (e) => {
    console.log("abc", e);
    this.setState({ inputValue: e.target.value });
  };

  submitHandler = (e) => {
    const values = [...this.state.data];
    values.push(this.state.inputValue);

    this.setState({ data: values });

    console.log(values);

    {this.state.inputValue=""};
  };

  deleteHandler = (i) => {
    console.log("i", i);

    let x = this.state.dataoff;
    x.splice(i, 1);
    this.setState({ dataoff: x });
  };

  editHandler = (row) => {
    // console.log('edit',row);
    this.setState({ inputValue: row.name });
  };

  updateHandler = (row) => {
    console.log("el", row);
    let updateArray = this.state.dataoff;

    updateArray.forEach((el) => {
      if (el.name === row.name) {
        el.name = this.state.inputValue;
      }
      this.setState({
        dataoff: updateArray,
        inputValue: "",
      });
    });
  };
  render() {
    return (
      <>
        <div>
          Name:{" "}
          <input
            type="text"
            value={this.state.inputValue}
            onChange={(e) => this.changeHandler(e)}
          />
        </div>

        {this.state.dataoff.map((row, index) => {
          console.log("g", row);
          return (
            <>
              <li key={index}>{row.name}</li>
              <button onClick={() => this.deleteHandler(index)}>Delete</button>

              <button onClick={() => this.editHandler(row)}>Edit</button>

              <button onClick={() => this.updateHandler(row)}>Update</button>
            </>
          );
        })}





        {<div>{`my name is: ${this.state.data}`}</div>} 


<button onClick={this.submitHandler}>Add</button>
      </>

    );
  }
}

export default Sami;
