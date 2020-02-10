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
        
        return (
            <textarea
                onChange={(event) => this.onTextChanged(event.target.value)}
            >
                {text}
            </textarea>
        )
    }
}