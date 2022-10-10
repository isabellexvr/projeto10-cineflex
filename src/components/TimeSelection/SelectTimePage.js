import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import Main from "./Main";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import Header from '../Header';
import { Link } from "react-router-dom";

export default function SelectTimePage({ selectedMovie, movie, setMovie, setSession }) {


    const { movieId } = useParams();

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${selectedMovie.id}/showtimes`;
        const promise = axios.get(URL)

        promise.then((answer) => {
            setMovie(answer.data);
        })
        promise.catch((answer) => {
            console.log(answer.response.data);
        })
    }, [selectedMovie.id, setMovie]);

    if (!movie) {
        return (
            <PageStyle>
                <TitleStyle>Carregando...</TitleStyle>
            </PageStyle>
        );
    };
    if (movie) {
        return (
            <>
                <Header>
                    <Link to="/">
                        <ion-icon alt="voltar" name="arrow-back-circle"></ion-icon>
                    </Link>
                    <ContainerStyle>
                        <h1>CINEFLEX</h1>
                    </ContainerStyle>
                </Header>
                <PageStyle>
                    <TitleStyle>Selecione o horário</TitleStyle>
                    <Main setSession={setSession} days={movie.days}/>
                    <Footer >
                        <MoviePosterStyle src={movie.posterURL} />
                        <MovieTitleStyle>{movie.title}</MovieTitleStyle>
                    </Footer>
                </PageStyle>
            </>
        );
    };
};

const PageStyle = styled.div`
    padding-bottom: 117px;
`;
const TitleStyle = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 110px;
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