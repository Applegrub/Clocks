import React from "react";
import styled from "@emotion/styled";


const Root = styled.div`
margin-top: 183px;
height: 216px;
width: 485px;
display: flex;
flex-direction: column;
`
const Date_wrapper=styled.div`
width: 412px;
height: 216px;
background: linear-gradient(129.9deg, #FFFFFF -17.58%, #E4ECF8 126.97%);
box-shadow: 0 0 30px rgba(13, 21, 63, 0.25);
border-radius: 16px;
`
const Title = styled.div`
margin: 19px 38px 0 37px;
font-family: Josefin Sans,sans-serif;
font-style: normal;
font-weight: normal;
font-size: 64px;
letter-spacing: 7.76px;
`
const Date = styled.div`
margin-left: 37px;
font-family: Montserrat, sans-serif;
font-style: normal;
font-weight: 300;
font-size: 58px;

letter-spacing: 4.76px;
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
                <Title>DAYTIME</Title>
                <Date>02:44 p.m. </Date>
            </Date_wrapper>
            <Peoples_settings>Show the other people's settings
            <Line/>
            </Peoples_settings>
        </Root>;
    }
}