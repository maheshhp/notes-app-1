export const addTodo = (todos, title) => [
  ...todos,
  {
    title,
    id: todos.length + 1,
  },
];

export const setTodoDone = (todos, todoId) => {
  const updatedTodos = todos.reduce((accumulator, todo) => {
    const currentTodo = {
      ...todo,
    };

    if (todo.id === todoId) {
      currentTodo.done = true;
    }

    return [...accumulator, currentTodo];
  }, []);

  return updatedTodos;
};
