import { useEffect, useState } from "react";
import styled from "styled-components";
import userConfig from './../../data/config';
import { gapi } from "gapi-script";

const Btn = styled.button`
    background-color: #567e5e;
    border-radius: 15px;
    width: 10rem;
    height: 3rem;

    &:active {
        transform: scale(0.9);
    }
`;

const Callendar = () => {

    const [apiLoaded, setApiLoaded] = useState(false);
    console.log(userConfig);

    const CLIENT_ID = "AIzaSyCnA61bCMkQRpO3nm9vBTiAkbL2IrkFVP4";
    const API_KEY = "kimjaemin742@gmail.com";
    const SCOPES = "https://www.googleapis.com/auth/calendar.events";

    useEffect(() => {
        const start = () => {
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                scope: SCOPES,
                discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
            }).then(() => setApiLoaded(true));
        };
        gapi.load("client:auth2", start);
    }, []);

    const handleAuth = () => {
        if (!apiLoaded) return alert("GoogleAPI가 현재 로딩중입니다...");

        const authInstance = gapi.auth2.getAuthInstance();
        authInstance.signIn().then(() => {
            addEventDay();
        })
    }

    const addEventDay = () => {
        const event = {
            summary: "수빈상훈의 결혼식",
            location: "서울 해군호텔",
            start: {
                dateTime: "2025-05-10T09:00:00",
                timeZone: "Asia/Seoul",
            },
        };

        gapi.client.calendar.events.insert({
            'calendarId': "primary", // 사용자의 기본 캘린더
            'resource': event,
        }).then((response) => {
            alert("구글이벤트 추가 완료");
            console.log("Event Created : ", response);
        }).catch((err) => {
            console.error("google event error :", err);
        });
    
    }



    return (
        <Btn onClick={handleAuth}>구글캘린더에 등록</Btn>
    );
}

export default Callendar;