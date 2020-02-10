import React from 'react';
import { Profile } from '.'

export default {
    title: 'Profile',
    component: Profile
}

export const Default = () => (
    <Profile
        name="Saurav"
        photoUrl="/saurav-sahu.jpg"
    />
)