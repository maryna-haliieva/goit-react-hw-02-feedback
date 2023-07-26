import PropTypes from 'prop-types';
import { Wrapper, Button } from './FeedbackOptions.styled';

export default function FeedbackOptions() {
  return (
    <Wrapper>
      <Button type="button">Good</Button>
      <Button type="button">Neutral</Button>
      <Button type="button">Bad</Button>
    </Wrapper>
  );
}

FeedbackOptions.propTypes = {};
