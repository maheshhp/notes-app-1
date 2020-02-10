import React from 'react';

export class TextArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

    onTextChanged = (text) => {
      const { limit } = this.props;
      const newText = text.trim().split('', limit).join('');

      this.setState({
        text: newText,
      }, () => {
        const { onTextChanged } = this.props;
        const { text: currentText } = this.state;
        onTextChanged(currentText);
      });
    }

    render = () => {
      const { text } = this.state;
      const { limit } = this.props;

      const charsLeft = limit - text.length;
      return (
        <div>
          <textarea
            onChange={(event) => this.onTextChanged(event.target.value)}
            value={text}
          />
          <div>{`${charsLeft} characters left`}</div>
        </div>
      );
    }
}
