import styled from "styled-components";
import rgba from 'hex-to-rgba';

export const AppRoot = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background-image: linear-gradient(${p => rgba(p.theme.colors.black, '1')}, ${p => rgba(p.theme.colors.black, '0.9')});
    background-size: 100% 100%;
    z-index: 1;
    font-family: ${props => props.theme.fonts[0]};

    & h1, h2, h3 {
        color: ${p => p.theme.colors.accent};
        font-family: ${props => props.theme.fonts[1]};
        margin: 0;
    }

    & p {
        color: ${p => p.theme.colors.darkGray};
        margin: 0;
    }
`

export const AppContent = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 3;
    display: flex;
`
