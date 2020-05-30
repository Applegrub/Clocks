import React from "react";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

interface IProps {
    control:boolean
}

export default class SwitchLabel extends React.Component<IProps>{
    state ={
        checked: this.props.control
    }

    handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      this.setState({checked: !this.state.checked} )
    };
    render(): React.ReactNode {
    return (
            <FormControlLabel
                control={<Switch
                    checked={this.state.checked}
                    onChange={this.handleChange} />}
                label=""
            />
    )}
}