import React from "react";
import './Switch.css'

interface IProps {
    isOn:boolean
}


export default class Switch extends React.Component<IProps> {
    state = {value: this.props.isOn}

    render() {
        const {value} = this.state;
        return <div className={'background'}>
        <div className={value ? 'on' : 'off'}>
            <div className='track' onClick={() => this.setState({value: !value})}>
                <div className='thumb'/>
            </div>
        </div>
    </div>;
    };
}

