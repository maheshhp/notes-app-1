import React from 'react';
import { Profile } from '../../components/profile';
import { CurrentTime } from '../../components/current-time';

export const Me = () => (
  <>
    <Profile
      name="Saurav"
      photoUrl="saurav-sahu.jpg"
    />
    <CurrentTime />
  </>
);
