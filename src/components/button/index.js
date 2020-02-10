import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

export const Button = ({ onClick, children }) => (
  <button
    onClick={onClick}
    type="button"
    className={styles.root}
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};
