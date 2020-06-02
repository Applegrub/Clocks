/** @jsx jsx */
import React from "react";
import ReactGlobe from 'react-globe';
import styled from "@emotion/styled";
import {css, jsx} from "@emotion/core";
import CircleStaticSlider from "./CircleStaticSlider";



const Root = styled.div`
margin-right: 25px;
height: 389px;
width: 355px;
position: relative;
display: flex;
align-items: center;

`
const Wrapper = styled.div`
position: absolute;
top: 58.62px;
left: 41.34px;
width: 272.32px;
height: 269.13px;
outline: none;
`
export default class Globe extends React.Component{
    render(): React.ReactNode {
        return <Root>
            <CircleStaticSlider/>
            <Wrapper>
                <ReactGlobe
                    globeOptions={{
                        enableBackground: false,
                    }}
                    cameraOptions={{
                        autoRotateSpeed: 3,
                        enableZoom: false,}}
                    css = {css`outline: none;`}
                />
            </Wrapper>
        </Root>;
    }
}