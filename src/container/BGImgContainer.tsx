"use client";

import { styled } from 'styled-components';

const BGImgContainer = styled.div`
    border: 30px solid transparent;
    border-image-source: url('/images/background2.jpg'); /* 이미지 경로 설정 */
    border-image-slice: 50% 35%; /* 이미지의 크기 설정 */
    border-image-width: 180px; /* 테두리 이미지의 너비 설정 */

`;

export default BGImgContainer;