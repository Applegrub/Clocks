import React from "react";

interface IState {
    date: number;

}
class Clock extends React.Component<IState> {
    state = {
        date: new Date()
    }


    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Привет, мир!</h1>
                <h2>Сейчас {this.state.date.toLocaleTimeString([, {hour12}])}.</h2>
            </div>
        );
    }
}
