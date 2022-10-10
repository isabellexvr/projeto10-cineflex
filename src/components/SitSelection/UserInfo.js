import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"

export default function UserInfo({selectedSeats, setInfo}) {

    const [name, setName] = useState("")

    const [cpf, setCpf] = useState("")

    const [submitError, setSubmitError] = useState(false)

    const navigate = useNavigate()

    function makeAReservation(e) {
        e.preventDefault()
        console.log(selectedSeats)
        if (name.length < 3 || selectedSeats < 1 || (cpf.length < 11 || cpf.length > 11)) {
            setSubmitError(true)
            return
        }
        const newArr = [cpf, name]
        setInfo(newArr)
        navigate("/sucesso")
    }

    return (
        <>
            {submitError && (
                <ErrorWindow>
                    <div className="content">
                        <h1>Erro! Insira um <strong>nome</strong> e um <strong>CPF</strong> válidos.</h1>
                        <button onClick={()=>setSubmitError(false)}>X</button>
                    </div>
                </ErrorWindow>
            )}

            <form onSubmit={makeAReservation}>
                <InfoContainer>
                    <label htmlFor="name">Nome do comprador:</label>
                    <input onChange={e => setName(e.target.value)} value={name} type="text" id="nome" placeholder="Digite seu nome..." />
                    <label htmlFor="cpf">CPF do comprador:</label>
                    <input maxLength="11" onChange={e => setCpf(e.target.value)} value={cpf} type="number" id="cpf" placeholder="Digite seu CPF..." />
                </InfoContainer>

                    <SubmitButton type="submit">Reservar assento(s)</SubmitButton>

            </form>
        </>
    )
}

const InfoContainer = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    color: #293845;
    margin-top: 31px;
    width: 327px;
    label{
    width: 327px;
    height: 25px;

    }
    input {
    width: 327px;
    height: 51px;
    border: 1px solid #D4D4D4;
    border-radius: 3px;
    color: #AFAFAF;
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: oblique;
    margin-bottom: 7px;
    margin-top: 7px;
    }
`

const SubmitButton = styled.button`
    margin-top: 20px;
    border-radius: 3px;
    background: #E8833A;
    width: 225px;
    height: 42px;
    color: white;
    border: 0;
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const ErrorWindow = styled.div`
z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
  width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
        background-color: white;
        border-radius: 5px;
        width: 250px;
        height: 70px;
        display: flex;
        h1 {
            margin-top: 10px;
            margin-left: 5px;
            font-size: 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            strong {
                font-weight: 900;
            }
        }
        button {
            margin-top: 10px;
            margin-right: 5px;
            background: red;
            height: 20px;
            width: 20px;
            border: none;
            border-radius: 20%;
            color: white;
            font-weight: 900;
        }
    }
`