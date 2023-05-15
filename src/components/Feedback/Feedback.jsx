import React from 'react';
import PropTypes from 'prop-types';
import { Options } from 'components/Feedback/Feedback.styled';

export const Feedback = ({ options, onLeaveFeedback }) => {
  const buttons = [...options];

  return (
    <Options onClick={onLeaveFeedback}>
      {buttons.map(button => (
        <li key={button}>
          <button type="button" name={button}>
            {button}
          </button>
        </li>
      ))}
    </Options>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
