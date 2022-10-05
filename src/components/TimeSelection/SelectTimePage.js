import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"
import Main from "./Main";
import Footer from "./Footer";

export default function SelectTimePage({ selectedMovie }) {

    const [timeSelection, setTimeSelection] = useState()

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/4/showtimes`;
        const promise = axios.get(URL)

        promise.then((answer) => {
            setTimeSelection(answer.data)
        })
        promise.catch((answer) => {
            console.log(answer.response.data)
        })
    }, []);

    return (
        <PageStyle>
            <TitleStyle>Selecione o horário</TitleStyle>
            <Main />
            <Footer />
        </PageStyle>
    )
}

const PageStyle = styled.div`
    padding-bottom: 117px;
`

const TitleStyle = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 110px;
        font-size: 24px;
        color: #293845;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`