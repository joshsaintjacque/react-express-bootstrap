import React, { Component } from 'react';
import './example.css';

class Example extends Component {
  state = { examples: [] }

  componentDidMount() {
    fetch('/api/examples')
      .then(res => res.json())
      .then(examples => this.setState({ examples }))
  }

  render() {
    return (
      <div>
        <h2>Examples</h2>
        <ul>
          {this.state.examples.map(example =>
            <li key={example.id}>{ example.name }</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Example;
