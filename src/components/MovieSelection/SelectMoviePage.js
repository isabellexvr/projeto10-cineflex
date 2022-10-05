import styled from "styled-components"
import MovieSelect from "./MovieSelect";
import axios from "axios"
import { useEffect, useState } from "react"


export default function SelectMoviePage({selectedMovie, setSelectedMovie}){

    const [movies, setMovies] = useState(undefined);

    const [error, setError] = useState(false);

    useEffect(()=> {
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
        const promise = axios.get(URL)

        promise.then((answer) => {
            console.log(answer.data)
            setMovies(answer.data)
        })
        promise.catch((answer) => {
            console.log(answer.response.data)
            setError(true)
        })
    }, []);


    if (error) {
        return <TitleStyle>Erro!</TitleStyle>
    }

    if (!error && movies === undefined) {
        return <TitleStyle>Carregando...</TitleStyle>
    };


    return (
        <>
            <TitleStyle>Selecione o filme</TitleStyle>
            <MoviesContainerStyle numberOfMovies={(movies.length/2) * 221}>
            {movies.map((movie)=> <MovieSelect setSelectedMovie={setSelectedMovie} id={movie.id} key={movie.id} posterURL={movie.posterURL}/>)}
            </MoviesContainerStyle>
        </>
    );
}



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

const MoviesContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: ${props => props.numberOfMovies}px;
    width: 100%;
    flex-wrap: wrap;
`