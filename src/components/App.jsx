import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)
      : '0';
  };

  render() {
    const { good, neutral, bad } = this.state;
    const hasNoStatistics = good + neutral + bad === 0;

    return (
      <>
        <div
          style={{
            
          }}
        >
          <Section title="Please leave feedback">
            <FeedbackOptions
              onLeaveFeedback={this.onLeaveFeedback}
              options={Object.keys(this.state)}
            />
          </Section>
          <Section title="Statistics">
            {hasNoStatistics ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                options={this.state}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            )}
          </Section>
        </div>
      </>
    );
  }
}
