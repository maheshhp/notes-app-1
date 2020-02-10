import React from 'react';
import { actions } from '@storybook/addon-actions';
import { HomePage } from '.';
import designTimeTodos from '../../data/todos.json';

export default {
  title: 'HomePage',
  component: HomePage,
};

const homePageActions = actions('onUpdateTodo', 'onNavigate');

export const Default = () => (
  <HomePage
    todos={designTimeTodos}
    {...homePageActions}
  />
);
