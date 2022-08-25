import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <div>
          <h3>Statistics</h3>
          <p>Good:{good}</p>
          <p>Neutral:{neutral}</p>
          <p>Bad:{bad}</p>
        </div>
        <div>
          <p>Total: {total}</p>
          <p>Positive Feedback: {positivePercentage}%</p>
        </div>
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
