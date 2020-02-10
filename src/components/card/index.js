import React from 'react';
import { Button } from '../button';

export const Card = ({ title, onDone }) => (
    <div>
        <div>{title}</div>
        <Button onClick={onDone}>
            Done
        </Button>
    </div>
)