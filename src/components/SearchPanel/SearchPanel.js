import React, { Component } from 'react';

export default class SearchPanel extends Component {
    state = {
       term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

  render() {
    return (
      <div className="col-sm">
              <input
                  className="form-control"
                  type="text"
                  placeholder="type to search"
                  value={this.state.term}
                  onChange={this.onSearchChange}
              />
      </div>
    );
  }
}
