import React from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions />
        </Section>
        {/* <Section title="Statistics">
          <Statistics />
        </Section> */}
      </div>
    );
  }
}
