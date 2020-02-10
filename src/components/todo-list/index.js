import React from 'react';
import { Card } from '../card';

export const TodoList = ({ todos, onTodoComplete }) => (
  <div>
    <div>All To-dos</div>
    {
            todos.map((todo) => (
              <Card
                key={todo.id}
                title={todo.title}
                onDone={() => onTodoComplete(todo.id)}
              />
            ))
        }
  </div>
);
