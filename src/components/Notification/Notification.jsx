import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <p className="notification">{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
