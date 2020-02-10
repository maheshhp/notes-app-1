import React from 'react';
import PT from 'prop-types';

export const Profile = ({ name, photoUrl }) => (
  <div>
    <div>
      Hi,
      {name}
      !
    </div>
    <img src={photoUrl} alt={`A photograph of ${name}`} />
  </div>
);

Profile.propTypes = {
  name: PT.string.isRequired,
  photoUrl: PT.string.isRequired,
};
