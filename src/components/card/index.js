import React from 'react';
import PT from 'prop-types';
import { Button } from '../button';

export const Card = ({ title, onDone }) => (
  <div>
    <div>{title}</div>
    <Button onClick={onDone}>
      Done
    </Button>
  </div>
);

Card.propTypes = {
  title: PT.string.isRequired,
  onDone: PT.func.isRequired,
};
