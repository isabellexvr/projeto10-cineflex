import styled from "styled-components";

export default function Header(){
    return (
        <HeaderStyle>
            <h1>CINEFLEX</h1>
        </HeaderStyle>
    );
};

const HeaderStyle = styled.div`
    background-color: #E5E5E5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 67px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    h1 {
        text-shadow: 2px 2px #9e5e33;
        font-size: 34px;
        font-weight: 600;
        color: #E8833A;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;