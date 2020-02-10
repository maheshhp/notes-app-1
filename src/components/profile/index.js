import React from 'react';
import PT from 'prop-types';

export const Profile = ({ name, photoUrl }) => (
  <div>
    <img src={photoUrl} alt={`A photograph of ${name}`} />
    <div>{`Hi, ${name}!`}</div>
  </div>
);

Profile.propTypes = {
  name: PT.string.isRequired,
  photoUrl: PT.string.isRequired,
};
