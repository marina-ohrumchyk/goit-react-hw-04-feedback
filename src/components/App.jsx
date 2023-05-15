import { Feedback } from 'components/Feedback/Feedback';
import React, { useState } from 'react';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackMarkup } from 'components/Feedback/FeedbackMarkup'
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const notifications = { good, neutral, bad };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;

    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total > 0) return Math.round((good / total) * 100, 0);
  };

  const onLeaveFeedback = event => {
    const feedback = event.target.name;
    switch (feedback) {
      case 'good':
        setGood(oldGood => oldGood + 1);
        break;
      case 'neutral':
        setNeutral(oldNeutral => oldNeutral + 1);
        break;
      case 'bad':
        setBad(oldBad => oldBad + 1);
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Section title="Please leave feadback">
        <Feedback
          options={Object.keys(notifications)}
          onLeaveFeedback={onLeaveFeedback}
        ></Feedback>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <FeedbackMarkup message="There is no feedback"></FeedbackMarkup>
        )}
      </Section>
    </Container>
  );
};
