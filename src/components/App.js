
import styled from "styled-components";
import GlobalStyle from "../assets/css/GlobalStyle";
import Header from "./Header";
import SelectMoviePage from "./MovieSelection/SelectMoviePage";
import SelectTimePage from "./TimeSelection/SelectTimePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react"

export default function App() {

    const [selectedMovie, setSelectedMovie] = useState()

    return (
        <ScreenStyle>
            <GlobalStyle />
            <Header />

            <SelectTimePage selectedMovie={selectedMovie}/>
        </ScreenStyle>
    )
}

const ScreenStyle = styled.div`

`

//pra quando quiser unificar:
//<SelectMoviePage selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie}/>


//pra quando começar a fazer as pages:
/* <BrowserRouter>
<ScreenStyle>
    <GlobalStyle />
    <Header />
    <Routes>
        <Route path="/" element={<SelectMoviePage/>}/>
    </Routes>
</ScreenStyle>
</BrowserRouter> */