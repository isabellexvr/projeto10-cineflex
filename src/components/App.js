import styled from "styled-components";
import GlobalStyle from "../assets/css/GlobalStyle";
import Header from "./Header";
import SelectMoviePage from "./MovieSelection/SelectMoviePage";
import SelectTimePage from "./TimeSelection/SelectTimePage";
import SelectSitPage from "./SitSelection/SelectSitPage";
import SuccessPage from "./Success/SuccessPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"
import { Link } from 'react-router-dom'

export default function App() {

    const [selectedMovie, setSelectedMovie] = useState()

    const [movie, setMovie] = useState(undefined)

    const [session, setSession] = useState();

    const [selectedSeats, setSelectedSeats] = useState([])

    return (
        <BrowserRouter>
            <ScreenStyle>
                <GlobalStyle />
                <Link to="/"><Header /></Link>
                <Routes>
                    <Route path="/" 
                    element={<SelectMoviePage setSelectedMovie={setSelectedMovie} />} 
                    />
                    <Route path="/filme/:movieId" 
                    element={<SelectTimePage selectedMovie={selectedMovie} movie={movie} setMovie={setMovie} setSession={setSession} selectedSeats={selectedSeats}/>}
                    />
                    <Route path="/sessao/:sessionId" 
                    element={<SelectSitPage setSelectedSeats={setSelectedSeats} selectedSeats={selectedSeats} selectedMovie={selectedMovie} movie={movie} session={session}/>}
                    />
                    <Route path="/sucesso" 
                    element={<SuccessPage />}
                    />
                </Routes>
            </ScreenStyle>
        </BrowserRouter>
    )
}

const ScreenStyle = styled.div`
a {
  color: blue;
  text-decoration: none;
}
`