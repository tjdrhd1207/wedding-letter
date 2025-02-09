"use client";

import styled from "styled-components";

const Content = styled.p`
    white-space: pre-line;
    line-height: 2.2rem;
    color: cadetblue;
    font-size: 20px;
`;

const Container = styled.div``;

const text = `저희 결혼합니다.\n\n
  서로에게 알맞은 온도로 따뜻하던 우리.
  부부로서 첫걸음을 내딛는 그 설렘의 순간에
  소중한 분들을 초대합니다.`;


const InviteContent = () => {
    return (
        <Container>
            <Content>{text}</Content>
        </Container>
    )
}

export default InviteContent;