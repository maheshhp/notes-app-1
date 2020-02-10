export const addTodo = (todos, todo) => {
  todos.push({
    ...todo,
    id: todos.length + 1,
  });
};

export const setTodoDone = (todos, todoId) => {
  const todosWhichMatchId = todos.filter((todo) => todo.id === todoId);

  if (todosWhichMatchId && todosWhichMatchId.length > 0) {
    const todoToMark = todosWhichMatchId[0];

    todoToMark.done = true;
  }
};
