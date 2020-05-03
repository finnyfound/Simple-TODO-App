import React from "react";

class AddTodo extends React.Component {
  state = {
    content: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addTodo(this.state);
    this.setState({
      content: "",
    });
  };
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Add new ToDo:
            <input type="text" onChange={this.handleChange} value={this.state.content} />
          </label>
        </form>
      </div>
    );
  }
}

export default AddTodo;
