import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Main({ days, setSession }) {

    const {sessionId} = useParams();

    function selectSession(e, weekday, b){
        const newArr = [];
        newArr.push(weekday);
        newArr.push(b.name);
        newArr.push(e.date);
        setSession(newArr);
    }

    return (
        <MainStyle>
            {days.map((e) => 
                <div key={e.id}>
                    <DayStyle>{e.weekday} - {e.date}</DayStyle>
                    <OptionsButtonsContainer>
                        <Link to={`/sessao/${e.id}`}>
                        {e.showtimes.map((b) =>
                            <TimeButton key={b.id} onClick={()=>selectSession(e, e.weekday, b)}>{b.name}</TimeButton>
                        )}
                        </Link>
                    </OptionsButtonsContainer>
                </div>
            )}
        </MainStyle>
    );
};

const MainStyle = styled.div`
display: flex;
align-items: center;
width: 60%;
flex-wrap: wrap;
margin: 0 auto;
@media (max-width: 844px){
    display: initial;
    >div {
        margin-left: 24px;
    }
}
`;
const DayStyle = styled.h1`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    color: #293845;
    margin-bottom: 22px;
    font-size: 20px;

`;
const OptionsButtonsContainer = styled.div`
 a{
    display: flex;
    width: 273px;
 }
`;
const TimeButton = styled.button`
    cursor: pointer;
    box-sizing: border-box;
    margin-bottom: 23px;
    background: #E8833A;
    border-radius: 3px;
    width: 83px;
    height: 43px;
    margin-right: 8px;
    border: none;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;