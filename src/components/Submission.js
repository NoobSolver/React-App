import React, { Component } from 'react';

class Submission extends Component {
  state = {
    id: null
  }

  componentDidMount() {
    this.setState({
      id: this.props.match.params.submission_id
    })
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.id}</h1>
        <h4>Router Params</h4>
      </div>
    )
  }
}

export default Submission;