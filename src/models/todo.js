import PT from 'prop-types';

export const todo = PT.shape({
  id: PT.number.isRequired,
  title: PT.string.isRequired,
  done: PT.bool.isRequired,
});
