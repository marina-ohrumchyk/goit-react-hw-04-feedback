import PropTypes from 'prop-types';

export const FeedbackMarkup = ({ message }) => {
  return <p>{message}</p>;
};

FeedbackMarkup.propTypes = {
  message: PropTypes.string.isRequired,
};
