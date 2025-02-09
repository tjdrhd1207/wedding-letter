"use client";

import styled from "styled-components";
import EventInfo from "./EventInfo";
import Callendar from "./FullCalendar";

const SubTitle = styled.p`
    font-size: 1.1rem;
    color: #2F2120;
    line-height: 140%;
    white-space: pre-line;
`;

const subTitleStyle = {
    fontFamily: 'HSSanTokki20-Regular',
    fontSize: '2.0rem',
    color: 'black',
    lineHeight: '140%',
    whiteSpace: 'pre-line'
}

const Sub = () => {
    return (
        <div>
            <SubTitle style={subTitleStyle}>기무상훈 그리고 수빈좌</SubTitle>
            <EventInfo></EventInfo>
            <Callendar></Callendar>
        </div>
    );
}

export default Sub;