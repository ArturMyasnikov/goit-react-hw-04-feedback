import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './FeedbackOptions/Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const counter = text => {
    setFeedback(state => ({ ...state, [text]: state[text] + 1 }));
  };

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const percent = Math.floor((good / total) * 100);

  return (
    <>
      <h2>Please leave feedback</h2>
      <FeedbackOptions
        options={Object.keys(feedback)}
        onLeaveFeedback={counter}
      />
      {total ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={percent}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

export default App;
