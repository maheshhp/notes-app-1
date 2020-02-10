import React from 'react';
import PT from 'prop-types';
import styles from './index.module.css';
import { Button } from '../button';

export const Card = ({ title, onDone }) => (
  <div className={styles.container}>
    <div className={styles.text}>{title}</div>
    <Button onClick={onDone}>
      Done
    </Button>
  </div>
);

Card.propTypes = {
  title: PT.string.isRequired,
  onDone: PT.func.isRequired,
};
