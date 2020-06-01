import React from "react";
// @ts-ignore
import { CircleSlider } from "react-circle-slider";

export class Circle_Slider extends React.Component {
    state = { value: 0 }

    handleChange = (value:number) => {
        console.log(`Changed value ${value}`);
        this.setState({ value });
    };

    handleChangeRange = (event:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: event.target.valueAsNumber,
        });
    };

    render() {
        const { value } = this.state;
        return (
            <CircleSlider
                value={value}
                onChange={this.handleChange}
                size ={354}
                knobRadius={20}
                circleWidth={10}
                progressWidth={10}
            />
        );
    }
}