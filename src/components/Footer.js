import styled from "styled-components";

export default function Footer(props){
    return (
        <FooterStyle>
            {props.children}
        </FooterStyle>
    );
};

const FooterStyle = styled.div`
    width: 100%;
    height: 117px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
`;