import React from 'react';
import { Me } from '../me';
import styles from './index.module.css';
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

    let pageView = null;
    switch (currentPage) {
      case HOME_PAGE:
        pageView = (
          <HomePage
            todos={todos}
            onUpdateTodo={this.onUpdateTodo}
            onNavigate={this.onNavigate}
          />
        );
        break;
      case CREATE_TODO_PAGE:
        pageView = (
          <NewTodoPage
            onAddTodo={(title) => this.onAddTodo(title)}
            onNavigate={this.onNavigate}
          />
        );
        break;
      default: break;
    }

    return (
      <div className={styles.container}>
        <div className={styles['me-container']}>
          <Me />
        </div>
        <div className={styles['page-view-container']}>
          {pageView}
        </div>
      </div>
    );
  }
}
