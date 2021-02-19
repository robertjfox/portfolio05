import styled from "styled-components"
import rgba from "hex-to-rgba"

export const AppRoot = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: linear-gradient(
    ${(p) => rgba(p.theme.colors.black, "1")},
    ${(p) => rgba(p.theme.colors.black, "0.85")}
  );
  background-size: 100% 100%;
  z-index: 1;
  overflow: hidden;
`

export const AppContent = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 3;
  display: flex;
`
