import React from 'react';
import PT from 'prop-types';
import { Card } from '../card';
import { todo as todoShape } from '../../models/todo';

export const TodoList = ({ todos, onTodoComplete }) => (
  <div>
    <div>All To-dos</div>
    {
      todos
        .filter((todo) => todo.done === false)
        .map((todo) => (
          <Card
            key={todo.id}
            title={todo.title}
            onDone={() => onTodoComplete(todo.id)}
          />
        ))
        }
  </div>
);

TodoList.propTypes = {
  todos: PT.arrayOf(todoShape),
  onTodoComplete: PT.func.isRequired,
};

TodoList.defaultProps = {
  todos: [],
};
