import styled, { keyframes, css } from "styled-components"

const fadeIn = keyframes`
  0% {transform: scale(.8); opacity: 0;}
`

const rotateText1 = keyframes`
  0% {transform:  rotate(0deg)}
  100% {transform:  rotate(360deg)}
`

const rotateText2 = keyframes`
  0% {transform:  rotate(120deg)}
  100% {transform:  rotate(480deg)}
`

const rotateText3 = keyframes`
  0% {transform:  rotate(240deg)}
  100% {transform:  rotate(600deg)}
`

export const AboutRoot = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Circle = styled.div`
  border-radius: 50%;
  height: 400px;
  width: 400px;
  position: relative;
  /* display: flex; */
  /* justify-content: center; */
  align-items: center;
  animation-name: ${fadeIn};
  animation-duration: 0.3s;
  background: linear-gradient(
    310deg,
    rgba(255, 255, 255, 0.25),
    rgba(255, 255, 255, 0.05)
  ); ;
`

export const Tab = styled.p`
  letter-spacing: 3px;
  text-align: center;
  width: 100px;
  font-size: 2rem;
  opacity: 0.2;
  transition: 0.3s;
  position: absolute;
  bottom: 50%;
  left: calc(50% - 50px);
  ${(p) =>
    p.index === 1 &&
    css`
      animation-name: ${rotateText1};
    `};
  ${(p) =>
    p.index === 2 &&
    css`
      animation-name: ${rotateText2};
    `};
  ${(p) =>
    p.index === 3 &&
    css`
      animation-name: ${rotateText3};
    `};
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  transform-origin: bottom center;
  height: 260px;

  ${(p) =>
    p.selected &&
    `
    opacity: 0.6;
  `}
`
