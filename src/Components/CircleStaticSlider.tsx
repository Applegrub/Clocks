import React from "react";
import styled from "@emotion/styled";
import summer from '../assests/Summer.svg'
import winter from '../assests/Winter.svg'
import seasonsThumb from '../assests/SeasonsThumb.png'

const Wrapper = styled.div`
width: 355px;
height: 355px;
border-radius: 335px;
box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
position: relative;
display: flex;
justify-content: center;
`
const Circle = styled.div`
position: absolute;
width: 355px;
height: 355px;
border-radius: 335px;
opacity: 0.3;
border: 10px solid #FFFFFF;
box-sizing: border-box;
`
const SummerThumb = styled.div`
width: 40px;
height: 40px;
border-radius: 40px;
z-index: 10;
background: #E5CC40;
box-shadow: 0 0 30px rgba(6, 95, 146, 0.25);
position: absolute;
left: 158px;
top: -15px
`
const Summer = styled.div`
position: absolute;
left: 8px;
top:  6px
`
const Winter_thumb = styled.div`
position: absolute;
width: 40px;
height: 40px;
left: 148px;
top: 318px;
border-radius: 40px;

background: #FFFFFF;
box-shadow: 0 0 30px rgba(6, 95, 146, 0.25);
`
const Winter = styled.div`
position: absolute;
left: 165px;
top: 338px
`
const SeasonsThumb = styled.div`
position: absolute;
left: 195px

`
export default class CircleStaticSlider extends React.Component {
    render(): React.ReactNode {
        return<Wrapper>
            <SeasonsThumb><img src={seasonsThumb}/></SeasonsThumb>
            <Winter><img src={winter}/></Winter>
            <SummerThumb><Summer><img src= {summer} /></Summer></SummerThumb>
            <Circle><Winter_thumb/></Circle>
        </Wrapper>;
    }
}