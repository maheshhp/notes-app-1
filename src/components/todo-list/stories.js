import React from 'react';
import { action } from '@storybook/addon-actions';
import { TodoList } from '.';
import designTimeTodos from '../../data/todos.json';


export default {
  title: 'TodoList',
  component: TodoList,
};

export const Default = () => (
  <TodoList
    todos={designTimeTodos}
    onTodoComplete={action('onTodoComplete')}
  />
);
