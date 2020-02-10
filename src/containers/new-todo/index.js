import React from 'react';
import PT from 'prop-types';
import { TextArea } from '../../components/text-area';
import { Button } from '../../components/button';
import { HOME_PAGE } from '../../constants';

export class NewTodoPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: '',
    };
  }

    onSubmitClick = () => {
      const { todoText } = this.state;
      const { onAddTodo, onNavigate } = this.props;

      onAddTodo(todoText);
      onNavigate(HOME_PAGE);
    };

    render = () => (
      <>
        <TextArea onTextChanged={(text) => this.setState({ todoText: text })} />
        <Button onClick={this.onSubmitClick}>Submit</Button>
      </>
    );
}

NewTodoPage.propTypes = {
  onAddTodo: PT.func.isRequired,
  onNavigate: PT.func.isRequired,
};
