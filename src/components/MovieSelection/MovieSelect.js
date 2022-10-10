import styled from "styled-components";

export default function MovieSelect({ id, posterURL, setSelectedMovie, movie }) {
    function movieSelection(movie) {
        setSelectedMovie(movie)
    }
    return (
        <MovieSelectStyle onClick={() => movieSelection(movie)} alt={`poster movie ${id}`} src={posterURL} />
    )
}

const MovieSelectStyle = styled.img`
margin-bottom: 11px;
width: 129px;
height: 193px;
border: 8px solid #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
`;