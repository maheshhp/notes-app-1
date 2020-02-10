import React from 'react';
import { action } from '@storybook/addon-actions';
import { Card } from '.';

export default {
  title: 'Card',
  component: Card,
};

export const Default = () => (
  <Card
    title="Finish this app!"
    onDone={action('onDone')}
  />
);
