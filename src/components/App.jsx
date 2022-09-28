import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import { useState } from 'react';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = option => {
    setState(prevState => {
      return {
        ...prevState,
        [option]: prevState[option] + 1,
      };
    });
  };

  const countTotalFeedback = () =>
    Object.values(state).reduce((acc, value) => acc + value, 0);

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? ((state.good / countTotalFeedback()) * 100).toFixed(0)
      : '0';
  };

  const hasNoStatistics = !countTotalFeedback();

  return (
    <>
      <div style={{}}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={onLeaveFeedback}
            options={Object.keys(state)}
          />
        </Section>
        <Section title="Statistics">
          {hasNoStatistics ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              options={state}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    </>
  );
};
