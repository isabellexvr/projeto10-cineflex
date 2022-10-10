import styled from "styled-components";

export default function Header({children}) {
    return (
        <HeaderStyle>
            {children}
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
    a ion-icon {
        font-size: 35px;
        color: #E8833A;
        cursor: pointer;
    }
`;