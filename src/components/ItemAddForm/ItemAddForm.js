import React, { Component } from 'react';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdd(this.state.label);
        this.setState({
            label: ''
        })
    };

  render() {
    return (
      <form className="row d-flex justify-content-between mt-2" onSubmit={this.onSubmit}>
        <div className="col-sm-10">
          <input
            className="form-control"
            type="text"
            placeholder="What needs to be done?"
            value={this.state.label}
            onChange={this.onLabelChange}
          />
        </div>
        <div className="col-sm-2">
          <button
            type="submit"
            className="btn btn-outline-secondary"
          >
            Add
          </button>
        </div>
      </form>
    );
  }
}
