import styled from "styled-components"

/* export default function Main({ days }) {
    return (
        <MainStyle>
            <DayStyle>{days.weekday} - {days.date}</DayStyle>
            <OptionsButtonsContainer>
                {days.showtimes.map((e)=>{
                    <TimeButton id={e.id}>{e.name}</TimeButton>
                })}
            </OptionsButtonsContainer>
        </MainStyle>
    )
} */

export default function Main({days}) {
    return (
        <MainStyle>
            <DayStyle>Quinta-feira - 24/06/2021</DayStyle>
            <OptionsButtonsContainer>
                <TimeButton onClick={()=>console.log(days)}>15:00</TimeButton>
                <TimeButton>15:00</TimeButton>
                <TimeButton>15:00</TimeButton>
            </OptionsButtonsContainer>
            <DayStyle>Quinta-feira - 24/06/2021</DayStyle>
            <OptionsButtonsContainer>
                <TimeButton onClick={()=>console.log(days)}>15:00</TimeButton>
                <TimeButton>15:00</TimeButton>
                <TimeButton>15:00</TimeButton>
            </OptionsButtonsContainer>
            <DayStyle>Quinta-feira - 24/06/2021</DayStyle>
            <OptionsButtonsContainer>
                <TimeButton onClick={()=>console.log(days)}>15:00</TimeButton>
                <TimeButton>15:00</TimeButton>
                <TimeButton>15:00</TimeButton>
            </OptionsButtonsContainer>
            <DayStyle>Quinta-feira - 24/06/2021</DayStyle>
            <OptionsButtonsContainer>
                <TimeButton onClick={()=>console.log(days)}>15:00</TimeButton>
                <TimeButton>15:00</TimeButton>
                <TimeButton>15:00</TimeButton>
            </OptionsButtonsContainer>
            <DayStyle>Quinta-feira - 24/06/2021</DayStyle>
            <OptionsButtonsContainer>
                <TimeButton onClick={()=>console.log(days)}>15:00</TimeButton>
                <TimeButton>15:00</TimeButton>
                <TimeButton>15:00</TimeButton>
            </OptionsButtonsContainer>
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
    display: flex;
    width: 273px;
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