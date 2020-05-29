import React from "react";
import styled from "@emotion/styled";

const Root = styled.div`
margin: 55px 73px 0 75px;
width: 487px;
height: 487px;
`
const Ordinate = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`
const Abscissa = styled.div`
display: flex;
align-items: center;
`
const Season = styled.div`
font-family: Montserrat, sans-serif;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 19px;
letter-spacing: -0.24px;
margin-left: 25px;

color: #FFFFFF;
`
export default class Globe_and_seasons extends React.Component{
    render(): React.ReactNode {
        return <Root>
            <Ordinate>
                <Abscissa>
                    <Season>SUMMER</Season>
                    <svg width="60" height="34" viewBox="0 0 60 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.75" y="0.75" width="58.5" height="28.5" rx="14.25" fill="#FEDD22" stroke="#F2F3F4" stroke-width="1.5"/>
                        <g filter="url(#filter0_d)">
                            <rect x="32.5" y="3" width="24" height="24" rx="12" fill="white"/>
                        </g>
                        <defs>
                            <filter id="filter0_d" x="25.5" y="0" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                <feOffset dx="-2" dy="2"/>
                                <feGaussianBlur stdDeviation="2.5"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                        </defs>
                    </svg>

                </Abscissa>
                <Abscissa>
                    <Season>SPRING</Season>

                    <Season>AUTUMN</Season>
                </Abscissa>
                    <Abscissa>
                        <Season>WINTER</Season>
                        <svg width="60" height="32" viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.75" y="0.75" width="58.5" height="28.5" rx="14.25" fill="#FAFAFA" stroke="#F2F3F4" stroke-width="1.5"/>
                            <g filter="url(#filter0_d)">
                                <rect x="3.5" y="3" width="24" height="24" rx="12" fill="white"/>
                            </g>
                            <defs>
                                <filter id="filter0_d" x="0.5" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                    <feOffset dx="1" dy="1"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                </filter>
                            </defs>
                        </svg>

                    </Abscissa>
            </Ordinate>
        </Root>;
    }
}