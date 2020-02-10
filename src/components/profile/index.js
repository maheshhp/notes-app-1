import React from 'react';

export const Profile = ({ name, photoUrl }) => (
    <div>
        <div>Hi, {name}!</div>
        <img src={photoUrl} alt={`A photograph of ${name}`}/>
</div>
)