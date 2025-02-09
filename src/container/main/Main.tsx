"use client";

import styled from "styled-components";

const MainImg = styled.img`
    border-radius: 200px 200px 0 0;
    padding-top: 20px;
`;

const MainTitle = styled.p`
    font-family: 'Pretendard-Regular';
    font-size: 2rem;
    color: #2F2120;
    line-height: 120%;
    white-space: pre-line;
`;



const mainImg = {
    src: '/images/05.jpg',
    width: 450,
    height: 400
};

const mainStyle = {
    borderRadius: '200px 200px 0 0',
    paddingTop: '20px'
};

const mainTitleStyle = {
    fontFamily: 'Pretendard-Regular',
    fontSize: '2rem',
    color: '#2F2120',
    lineHeight: '120%',
    whiteSpace: 'pre-line',
    paddingTop: '15px'
}

const Main = () => {

    return (
        <div>
            <MainImg
              src={mainImg.src}
              alt="Main Image"
              width={mainImg.width}
              height={mainImg.height}
              style={mainStyle}
            />
            <MainTitle style={mainTitleStyle}>THE NEW BEGINNING</MainTitle>
        </div>
    )
}

export default Main;