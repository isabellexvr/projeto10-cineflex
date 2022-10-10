import styled from "styled-components"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

export default function Main({ days, id, setSession }) {

    const {sessionId} = useParams()

    function selectSession(weekday, b){
        const newArr = []
        newArr.push(weekday)
        newArr.push(b.name)
        setSession(newArr)
    }

    return (
        <MainStyle>
            {days.map((e) => 
                <div key={e.id}>
                    <DayStyle>{e.weekday} - {e.date}</DayStyle>
                    <OptionsButtonsContainer>
                        <Link to={`/sessao/${id}`}>
                        {e.showtimes.map((b) =>
                            <TimeButton key={b.id} onClick={()=>selectSession(e.weekday, b)}>{b.name}</TimeButton>
                        )}
                        </Link>
                    </OptionsButtonsContainer>
                </div>
            )}
        </MainStyle>
    )
}

const MainStyle = styled.div`
    margin-left: 24px;

`
const DayStyle = styled.h1`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    color: #293845;
    margin-bottom: 22px;
    font-size: 20px;

`
//width do container de botoes é (91 * numero de botoes)
const OptionsButtonsContainer = styled.div`
 a{
    display: flex;
    width: 273px;
 }
`
const TimeButton = styled.button`
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
`