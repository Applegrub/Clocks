import React from "react";
import ReactGlobe from 'react-globe';
import styled from "@emotion/styled";
import SeasonRing from '../assests/Season_ring.png'


const Root = styled.div`
margin-right: 25px;
height: 387px;
width: 355px;
position: relative;

`
const Wrapper = styled.div`
position: absolute;
top: 58.62px;
left: 41.34px;
width: 272.32px;
height: 269.13px;

`
export default class Globe extends React.Component{
    render(): React.ReactNode {
        return <Root>
            <img src={SeasonRing} alt="Season Ring"/>
            <Wrapper>
                <ReactGlobe
                    globeOptions={{
                        enableBackground: false,
                    }}
                    cameraOptions={{
                        autoRotateSpeed: 3,
                        enableZoom: false,}}
                />
            </Wrapper>
        </Root>;
    }
}