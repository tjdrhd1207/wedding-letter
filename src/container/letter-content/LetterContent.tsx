"use client";

import styled from "styled-components";
import InviteContent from "./content/InviteContent";

const Header = styled.p`
    font-family: 'HSSanTokki20-Regular';
    color: pink;
    font-size: 2.0rem;
`

const LetterContent = () => {
    return (
        <div>
            <Header>모시는글</Header>
            <InviteContent></InviteContent>
        </div>
    )
}

export default LetterContent;