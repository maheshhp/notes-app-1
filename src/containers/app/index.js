import React from 'react';
import { Profile } from '../../components/profile';
import { TodoList } from '../../components/todo-list';
import { setTodoDone } from '../../utils/todo-store';
import designTimeTodos from '../../data/todos.json';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

    componentDidMount = () => {
      this.setState({
        todos: designTimeTodos,
      });
    }

    updateTodo = (id) => {
      const { todos } = this.state;
      setTodoDone(todos, id);

      this.setState({
        todos,
      });
    }

    render = () => {
      const { todos } = this.state;

      return (
        <>
          <Profile
            name="Saurav"
            photoUrl="/saurav-sahu.jpg"
          />
          <TodoList
            todos={todos}
            onTodoComplete={(id) => this.updateTodo(id)}
          />
        </>
      );
    }
}
