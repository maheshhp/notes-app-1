import React from 'react';
import { TodoList } from '../../components/todo-list';
import { Button } from '../../components/button';

import { CREATE_TODO_PAGE } from '../../constants';

export const HomePage = ({ todos, onUpdateTodo, onNavigate }) => (
  <div>
    <TodoList
      todos={todos}
      onTodoComplete={onUpdateTodo}
    />
    <Button onClick={() => onNavigate(CREATE_TODO_PAGE)}>
      Create New
    </Button>
  </div>
);

// TODO: write prop types
