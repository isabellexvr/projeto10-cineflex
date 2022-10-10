import styled from "styled-components";
import colors from "./selectionColors";
import UserInfo from "./UserInfo";

export default function SeatsRender({ seats, setSelectedSeats, selectedSeats, setInfo }) {

    function selectSeat(seat) {
        if (seat.isAvailable) {
            const newSelectedSeats = [...selectedSeats, seat];
            setSelectedSeats(newSelectedSeats);
        };
    };

    if (!seats) {
        return <div>Carregando...!</div>
    }
    if (seats) {
        return (
            <PageStyle>
                <div>
                <SeatsContainerStyle>
                    {seats.map((seat) =>
                        <SeatStyle
                            onClick={() => selectSeat(seat)}
                            key={seat.id}
                            color={selectedSeats.includes(seat) ? colors.green : (seat.isAvailable ? colors.grey : colors.yellow)}
                            borderColor={selectedSeats.includes(seat) ? colors.green_border : (seat.isAvailable ? colors.grey_border : colors.yellow_border)}
                        >
                            {seat.name}
                        </SeatStyle>
                    )}
                </SeatsContainerStyle>
                <ColorIndexStyle>
                    <div className="selecionado">
                        <ColorCircle color={colors.green} borderColor={colors.green_border}></ColorCircle>
                        <h1>Selecionado</h1>
                    </div>
                    <div className="disponivel">
                        <ColorCircle color={colors.grey} borderColor={colors.grey_border}></ColorCircle>
                        <h1>Disponível</h1>
                    </div>
                    <div className="indisponivel">
                        <ColorCircle color={colors.yellow} borderColor={colors.yellow_border}></ColorCircle>
                        <h1>Indisponível</h1>
                    </div>
                    
                </ColorIndexStyle>
                
                </div>
                <CleanButton onClick={()=> setSelectedSeats([])}>Limpar Escolhas</CleanButton>
                <UserInfo setInfo={setInfo} selectedSeats={selectedSeats}/>
            </PageStyle>
        );
    };
};

const SeatsContainerStyle = styled.div`
    width: 350px;
    display: flex;
    flex-wrap: wrap;

`;
const SeatStyle = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    cursor: pointer;
    font-size: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    background-color: ${props => props.color};
    border: 1px solid ${props => props.borderColor};
    border-radius: 50%;
    margin-right: 7px;
    margin-bottom: 18px;
    .selected {
        background-color: red;
        border: 1px solid ${colors.green_border};
    }
`;
const ColorIndexStyle = styled.div`
    margin-top: 6px;
    height: 54px;
    width: 286px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        h1 {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 13px;
            font-weight: 400;
            color: #4E5A65;
        }
    }

`;
const ColorCircle = styled.div`
margin-bottom: 1px;
width: 25px;
height: 25px;
    border-radius: 50%;
    border: 1px solid ${props => props.borderColor};
    background-color: ${props => props.color};
`;
const PageStyle = styled.div`
display: flex;
justify-content: space-around;
width: 56%;
margin: 0 auto;
@media (max-width: 844px){
flex-direction: column;
align-items: center;
width: 100%;
}
`;
const CleanButton = styled.button`
    cursor: pointer;
    margin-top: 20px;
    border-radius: 3px;
    background: #E8833A;
    width: 150px;
    height: 40px;
    color: white;
    border: 0;
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;