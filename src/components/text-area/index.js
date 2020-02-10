import React from 'react';

export class TextArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    onTextChanged = (text) => {
        this.setState({
            text: text.trim()
        }, () => {  
                const { onTextChanged } = this.props;
                const { text:currentText} = this.state;
                onTextChanged(currentText);
        })
    }

    render = () => {
        const { text } = this.state;
        const { limit } = this.props;
        

        const charsLeft = limit - text.length;
        return (
            <div>
            <textarea
                    onChange={(event) => this.onTextChanged(event.target.value)}
                    disabled={charsLeft <= 0}
            >
                {text}
                </textarea>
                <div>{`${charsLeft} characters left`}</div>
            </div>
        )
    }
}