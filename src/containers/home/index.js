import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';
import { TodoList } from '../../components/todo-list';
import { Button } from '../../components/button';
import { CREATE_TODO_PAGE } from '../../constants';
import { todo as todoShape } from '../../models/todo';

export const HomePage = ({ todos, onUpdateTodo }) => (
  <>
    <TodoList
      todos={todos}
      onTodoComplete={onUpdateTodo}
    />
    <Link to={CREATE_TODO_PAGE}>
      <Button onClick={() => {}}>
        Create New
      </Button>
    </Link>
  </>
);

HomePage.propTypes = {
  todos: PT.arrayOf(todoShape),
  onUpdateTodo: PT.func.isRequired,
};

HomePage.defaultProps = {
  todos: [],
};
