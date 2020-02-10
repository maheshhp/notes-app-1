import React from 'react';
import { action } from '@storybook/addon-actions';
import { TodoList } from '.';


export default {
  title: 'TodoList',
  component: TodoList,
};

const todos = [
  {
    id: 1,
    title: 'Finish the todo app',
  },
  {
    id: 2,
    title: 'Review todo app code',
  },
  {
    id: 3,
    title: 'Cover React life cycle events',
  },
];

export const Default = () => (
  <TodoList
    todos={todos}
    onTodoComplete={action('onTodoComplete')}
  />
);
