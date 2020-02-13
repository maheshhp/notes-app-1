import React from 'react';
import {
  Switch, Route, withRouter,
} from 'react-router-dom';
import PT from 'prop-types';
import styles from './index.module.css';
import designTimeTodos from '../../data/todos.json';
import { HOME_PAGE, CREATE_TODO_PAGE } from '../../constants';
import { HomePage } from '../home';
import { NewTodoPage } from '../new-todo';
import { setTodoDone, addTodo } from '../../utils/todo-store';

class App extends React.Component {
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

  render = () => {
    const { todos } = this.state;
    const { history } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles['page-view-container']}>
          <Switch>
            <Route path={HOME_PAGE}>
              <HomePage
                todos={todos}
                onUpdateTodo={this.onUpdateTodo}
              />
            </Route>
            <Route path={CREATE_TODO_PAGE}>
              <NewTodoPage
                onAddTodo={(title) => this.onAddTodo(title)}
                history={history}
              />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  history: PT.object.isRequired,
};

export default withRouter(App);
