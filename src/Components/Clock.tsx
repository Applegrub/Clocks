import React from "react";
import styled from "@emotion/styled";


const Clocks = styled.div`
font-family: Montserrat, sans-serif;
font-style: normal;
font-weight: 300;
font-size: 58px;
line-height: 19px;
letter-spacing: 4.76px;

color: #FFFFFF;
`
export default class Clock extends React.Component{
    state = {
        date: new Date(),
    }

    timerID: any = 0
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
            <Clocks>
                {this.state.date.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}).toLowerCase()}.
            </Clocks>
        );
    }
}
