"use client";

import styled from "styled-components";


const InfoLayout = styled.div`
    padding-top: 30px;
    color: black;
    font-size: 20px;
    font-family: SUITE-Regular;
`;

const DateInfo = styled.p`

`;

const LocationInfo = styled.p`

`;

const EventInfo = () => {
    return (
        <InfoLayout>
            <DateInfo>2024년 2월 18일 (토) 15:00</DateInfo>
            <LocationInfo>잠실 교통회관</LocationInfo>
        </InfoLayout>
    )
}

export default EventInfo;