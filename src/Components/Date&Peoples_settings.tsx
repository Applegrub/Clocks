import React from "react";
import styled from "@emotion/styled";
import Clock from './Clock'



const Root = styled.div`
position: relative;
margin-top: 183px;
height: 216px;
width: 485px;
display: flex;
flex-direction: column;
`
const Date_wrapper=styled.div`
width: 412px;
height: 216px;
opacity: 0.3;
background: linear-gradient(129.9deg, #FFFFFF -17.58%, #E4ECF8 126.97%);
box-shadow: 0 0 30px rgba(13, 21, 63, 0.25);
border-radius: 16px;
`
const Title = styled.div`
position: absolute;
top:53px;
left: 37px;
font-family: Josefin Sans,sans-serif;
font-style: normal;
font-weight: normal;
font-size: 64px;
line-height: 19px;

letter-spacing: 7.76px;
color: #FFFFFF;
`
const Date = styled.div`
position:absolute;
top: 118px;
left: 38px
`
const Peoples_settings = styled.div`
margin-top: 18px;
margin-left: 131px;
display: flex;
font-family: SF Pro Display, sans-serif;
font-weight: 600;
font-size: 17px;
line-height: 19px;
letter-spacing: -0.24px;
color: #001C52;
`
const Line = styled.div`
margin: 6px 0 0 16px;
width: 76px;
height: 0;
border: 2px solid #001C52;
`
export default class Date_peoples_settings extends React.Component{
    render(): React.ReactNode {
        return <Root>
            <Date_wrapper>
            </Date_wrapper>
            <Title>DAYTIME</Title>
            <Date><Clock/></Date>
            <Peoples_settings>Show the other people's settings
            <Line/>
            </Peoples_settings>
        </Root>;
    }
}