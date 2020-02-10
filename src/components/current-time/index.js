import React from 'react';
import moment from 'moment';

export class CurrentTime extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
time: new Date()
        }

    }
    
    componentDidMount = () => {
        setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }

    render = () => {
        const { time } = this.state;
        const currentMoment = moment(time);

        return (
            <div>
                <div>{currentMoment.format('HH:mm:ss a')}</div>
                <div>{currentMoment.format('Do MMMM, YYYY')}</div>
            </div>
        )
    }

}