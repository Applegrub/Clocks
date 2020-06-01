/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import Globe from "./Globe";
import {css, jsx} from "@emotion/core";
import Switch from "./Switch";


const Root = styled.div`
margin: 55px 73px 0 75px;
width: 567px;
height: 412px;
`
const Ordinate = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 567px;
`
const Abscissa = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const Season = styled.div`
font-family: Montserrat, sans-serif;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 19px;
letter-spacing: -0.24px;
margin-right: 25px;

color: #FFFFFF;
`
export default class Globe_and_seasons extends React.Component{
    render(): React.ReactNode {
        return <Root>
            <Ordinate>
                <Abscissa>
                    <Season>SUMMER</Season>
                    <Switch isOn={true} />
                </Abscissa>
                <Abscissa>
                    <Season>SPRING</Season>
                    <Globe/>
                    <Season css={css`margin-right: 0;`}>AUTUMN</Season>
                </Abscissa>
                    <Abscissa>
                        <Season>WINTER</Season>
                        <Switch isOn={false}/>
                    </Abscissa>
            </Ordinate>
        </Root>;
    }
}