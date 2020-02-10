import React from 'react';
import { Profile } from '../../components/profile';
import designTimeTodos from '../../data/todos.json';
import { HOME_PAGE, CREATE_TODO_PAGE } from '../../constants';
import { HomePage } from '../home';
import { NewTodoPage } from '../new-todo';
import { setTodoDone, addTodo } from '../../utils/todo-store';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      currentPage: HOME_PAGE,
    };
  }

  componentDidMount = () => {
    this.setState({
      todos: designTimeTodos,
    });
  }

  onAddTodo = (title) => {
    const { todos } = this.state;
    const newTodos = addTodo(todos, title);

    this.setState({
      todos: newTodos,
    });
  }

  onUpdateTodo = (id) => {
    const { todos } = this.state;
    const newTodos = setTodoDone(todos, id);

    this.setState({
      todos: newTodos,
    });
  }

  onNavigate = (page) => {
    this.setState({
      currentPage: page,
    });
  }

  render = () => {
    const { currentPage, todos } = this.state;

    const pageView = currentPage === HOME_PAGE
      ? (
        <HomePage
          todos={todos}
          onUpdateTodo={this.onUpdateTodo}
          onNavigate={() => this.onNavigate(CREATE_TODO_PAGE)}
        />
      )
      : (
        <NewTodoPage
          onAddTodo={(title) => this.onAddTodo(title)}
          onNavigate={() => this.onNavigate(HOME_PAGE)}
        />
      );

    return (
      <div>
        <Profile
          name="Saurav"
          photoUrl="/saurav-sahu.jpg"
        />
        <div>
          {pageView}
        </div>
      </div>
    );
  }
}
