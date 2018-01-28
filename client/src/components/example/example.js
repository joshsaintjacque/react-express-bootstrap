import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getExamples } from '../../store/actions/exampleActions';
import './example.css';

class Examples extends Component {
  static propTypes = {
    getExamples: PropTypes.func.isRequired,
    examples: PropTypes.array.isRequired
  }

  static defaultProps = {
    examples: []
  }

  componentWillMount() {
    this.props.getExamples();
  }

  render() {

    return (
      <div>
        <h2>Examples</h2>
        <ul>
        {this.props.examples.map(example =>
          <li key={example.id}>{example.name}</li>
        )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  examples: state.examples
})

const dispatchToProps = (dispatch) => ({
   getExamples: () => dispatch(getExamples())
})

export default connect(mapStateToProps, dispatchToProps)(Examples);