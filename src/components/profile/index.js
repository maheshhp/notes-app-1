import React from 'react';
import PT from 'prop-types';
import styles from './index.module.css';

export const Profile = ({ name, photoUrl }) => (
  <div className={styles.container}>
    <img
      src={photoUrl}
      alt={`A photograph of ${name}`}
      className={styles.photo}
    />
    <div className={styles.message}>{`Hi, ${name}!`}</div>
  </div>
);

Profile.propTypes = {
  name: PT.string.isRequired,
  photoUrl: PT.string.isRequired,
};
