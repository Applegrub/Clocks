/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import {css, jsx} from "@emotion/core";

const Root = styled.div`
margin: 35px 70px 0 48px;
width: 1082px;
display: flex;
`
const Button = styled.div`
margin-right: 20px;
font-family: SF Pro Display,sans-serif;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 19px;

letter-spacing: -0.24px;
color: #000D80;
`

export default class Menu extends React.Component{
    render(): React.ReactNode {
        return <Root>
            <Button css={css`flex-grow: 1;`}>EARTH SETTINGS</Button>
            <Button>WORLD</Button>
            <Button>ACCOUNT</Button>
        </Root>;
    }
}