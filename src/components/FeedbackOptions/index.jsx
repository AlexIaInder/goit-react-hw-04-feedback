import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div>
    {options.map(option => (
      <button
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        <span>{option}</span>
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.number.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
