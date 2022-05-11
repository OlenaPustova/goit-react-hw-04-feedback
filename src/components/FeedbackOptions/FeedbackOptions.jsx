import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const arrOptions = Object.keys(options);
  return (
    <>
      <div>
        {arrOptions.map(item => (
          <button
            key={nanoid()}
            className="btn"
            type="button"
            name={item}
            onClick={onLeaveFeedback}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
