import styled from "styled-components"

export default function Footer({posterURL, title}){
    return (
        <FooterStyle>
            <MoviePosterStyle src="https://image.tmdb.org/t/p/w500/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg"/>
            <MovieTitleStyle>Mulan</MovieTitleStyle>
        </FooterStyle>
    )
}

const FooterStyle = styled.div`
    width: 375px;
    height: 117px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
`

const MoviePosterStyle = styled.img`
    width: 48px;
    height: 74px;
    border: 8px solid #FFFFFF;
    margin-left: 10px;
`
const MovieTitleStyle = styled.h1`
    margin-left: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #293845;
    font-size: 26px;
    font-weight: 400;
`