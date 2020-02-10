import React from 'react';
import PT from 'prop-types';
import { TodoList } from '../../components/todo-list';
import { Button } from '../../components/button';

import { CREATE_TODO_PAGE } from '../../constants';
import { todo as todoShape } from '../../models/todo';

export const HomePage = ({ todos, onUpdateTodo, onNavigate }) => (
  <>
    <TodoList
      todos={todos}
      onTodoComplete={onUpdateTodo}
    />
    <Button onClick={() => onNavigate(CREATE_TODO_PAGE)}>
      Create New
    </Button>
  </>
);

HomePage.propTypes = {
  todos: PT.arrayOf(todoShape),
  onUpdateTodo: PT.func.isRequired,
  onNavigate: PT.func.isRequired,
};

HomePage.defaultProps = {
  todos: [],
};
