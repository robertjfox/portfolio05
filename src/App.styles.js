import styled from "styled-components"
import rgba from "hex-to-rgba"
import Div100vh from "react-div-100vh"

export const AppRoot = styled(Div100vh)`
  width: 100vw;
  position: relative;
  background-image: linear-gradient(
    ${(p) => rgba(p.theme.colors.black, "1")},
    ${(p) => rgba(p.theme.colors.black, "0.85")}
  );
  background-size: 100% 100%;
  z-index: 1;
  overflow: hidden;
`

export const AppContent = styled(Div100vh)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 550px) {
    position: relative;
    align-items: flex-start;
  }
`
