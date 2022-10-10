import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SuccessPage({ session, selectedMovie, selectedSeats, info }) {

    return (
        <SuccessPageStyle>
            <TitleStyle>Pedido feito com sucesso!</TitleStyle>
            <InfoContainerStyle>
                <h1>Filme e sessão</h1>
                <br />
                <p>{selectedMovie.title}</p>
                <p>{session[2]} {session[1]}</p>
            </InfoContainerStyle>
            <InfoContainerStyle>
                <h1>Ingressos</h1>
                <br />
                {selectedSeats.map((seat, index) =>
                    <p key={index}>Assento {seat.name}</p>
                )}
            </InfoContainerStyle>
            <InfoContainerStyle>
                <h1>Comprador</h1>
                <br />
                <p>Nome: {info.name}</p>
                <p>CPF: {info.cpf}</p>
            </InfoContainerStyle>
            <Link to="/">
                <HomeButton type="submit">Voltar para Home</HomeButton>
            </Link>
        </SuccessPageStyle>
    );
};

const TitleStyle = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 110px;
            font-size: 24px;
            font-weight: 700;
            color: #247A6B;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

            `;
const InfoContainerStyle = styled.div`
            margin-left: 24px;
            height: 110px;
            color: #293845;
            h1{
            font-weight: 700;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size:24px;
}
            p{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 400;
            font-size: 22px;
            line-height:25.78px;
            width: 338.02px;
}
            `;
const HomeButton = styled.button`
            margin: 0 auto;
            margin-top: 20px;
            border-radius: 3px;
            background: #E8833A;
            width: 225px;
            height: 42px;
            color: white;
            border: 0;
            font-size: 18px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            `;
const SuccessPageStyle = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`;