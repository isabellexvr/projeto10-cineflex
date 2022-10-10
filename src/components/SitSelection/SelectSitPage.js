import styled from "styled-components";
import SeatsRender from "./SeatsRender";
import Footer from "../Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from '../Header';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function SelectSitPage({ selectedMovie, session, setSelectedSeats, selectedSeats, setInfo, setSelectedSession }) {

    const {sessionId} = useParams();
    setSelectedSession(sessionId)

    const [seats, setSeats] = useState();

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${selectedMovie.id}/seats`;
        const promise = axios.get(URL);

        promise.then((answer) => {
            setSeats(answer.data.seats)
        })

        promise.catch((answer) => {
            console.log(answer.responde.data)
        })
    }, [selectedMovie.id]);

    if (!session) {
        return <TitleStyle>Carregando...</TitleStyle>
    };

    if (session) {
        return (
            <>
                <Header>
                    <Link to={`/filme/${selectedMovie.id}`}>
                        <ion-icon alt="voltar" name="arrow-back-circle"></ion-icon>
                    </Link>
                    <ContainerStyle>
                        <h1>CINEFLEX</h1>
                    </ContainerStyle>
                </Header>
                <SelecSitPageStyle>
                    <TitleStyle>Selecione o(s) assento(s)</TitleStyle>
                    <SeatsRender setInfo={setInfo} setSelectedSeats={setSelectedSeats} selectedSeats={selectedSeats} seats={seats}></SeatsRender>
                    <Footer>
                        <MoviePosterStyle src={selectedMovie.posterURL} />
                        <div>
                            <MovieTitleStyle>{selectedMovie.title}</MovieTitleStyle>
                            <MovieTitleStyle>{session[0]} - {session[1]}</MovieTitleStyle>
                        </div>
                    </Footer>
                </SelecSitPageStyle>
            </>
        )
    };
}

const SelecSitPageStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 850px;
`;
const TitleStyle = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 90px;
        font-size: 24px;
        color: #293845;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
const MoviePosterStyle = styled.img`
    width: 48px;
    height: 74px;
    border: 8px solid #FFFFFF;
    margin-left: 10px;
`;
const MovieTitleStyle = styled.h1`
    margin-left: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: black;
    font-size: 26px;
    font-weight: 400;
`;
const ContainerStyle = styled.div`
width: 80%;
display: flex;
justify-content: center;
h1 {
        text-shadow: 2px 2px #9e5e33;
        font-size: 34px;
        font-weight: 600;
        color: #E8833A;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;