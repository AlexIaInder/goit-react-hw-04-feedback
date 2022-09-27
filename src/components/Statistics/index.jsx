import './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ options, total = 0, positivePercentage = 0 }) => {
  return (
    <div className="Counter">
      <ul>
        {Object.entries(options).map(([optionName, value]) => (
          <li key={optionName}>
            {`${optionName[0].toLocaleUpperCase()}${optionName.slice(1)}: `}
            {value}
          </li>
        ))}
        <li>Total: {total}</li>
        <li>Positive Feedback: {positivePercentage}%</li>
      </ul>
    </div>
  );
};

Statistics.prototype = {
  options: PropTypes.object,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
export default Statistics;
