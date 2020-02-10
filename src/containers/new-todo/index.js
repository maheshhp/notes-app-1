import React from 'react';
import { TextArea } from '../../components/text-area';
import { Button } from '../../components/button';

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
      onNavigate();
    };

    render = () => (
      <div>
        <TextArea onTextChanged={(text) => this.setState({ todoText: text })} />
        <Button onClick={this.onSubmitClick}>Submit</Button>
      </div>
    );
}
