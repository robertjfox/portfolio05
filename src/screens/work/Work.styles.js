import styled, { keyframes } from "styled-components"

const workBoxIn = keyframes`
  0% {opacity: 0; transform:  scale(.75)}
`

export const WorkRoot = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WorkBox = styled.div`
  width: 300px;
  height: 300px;
  margin: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  animation-name: ${workBoxIn};
  animation-delay: ${(p) => p.index / 6}s;
  animation-duration: 0.6s;
  animation-fill-mode: backwards;
`
