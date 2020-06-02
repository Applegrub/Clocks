import React from "react";
import './Switch.css'

interface IProps {
    isOn:boolean
    onClick?: () => void
}
const Switch: React.FunctionComponent<IProps> = ({isOn, onClick}) =>
    <div className={'background'}>
    <div className={isOn ? 'on' : 'off'}>
        <div className='track' onClick={onClick}>
            <div className='thumb'/>
        </div>
    </div>
</div>
export default  Switch

