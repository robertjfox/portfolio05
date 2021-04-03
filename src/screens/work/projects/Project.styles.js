import styled, { keyframes } from "styled-components"
import Div100vh from "react-div-100vh"

const fadeIn = keyframes`
  0% {opacity: 0}
`

const fadeOut = keyframes`
  100% {opacity: 0}
`

const fadeUp = keyframes`
  0% {opacity: 0; transform: translateY(100%)}
`

const fadeDown = keyframes`
  100% {opacity: 0; transform: translateY(100%)}
`

export const ProjectRoot = styled(Div100vh)`
  width: 60%;
  margin-left: 6%;
  display: flex;
  flex-direction: column;

  @media (max-width: 550px) {
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    padding: 120px 20px 20px;
    margin: 0;
    overflow: scroll;
  }
`

export const CloseButton = styled.div`
  background: rgba(255, 255, 255, 0.2);
  height: 30px;
  width: 30px;
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  top: 10px;
  right: 10px;
  transition: 0.15s ease-in;

  @media (max-width: 550px) {
    display: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`

export const Role = styled.h1`
  animation-name: ${(p) => (p.unmounting ? fadeOut : fadeIn)};
  animation-delay: ${(p) => (p.unmounting ? "0.3s" : "0s")};
  animation-duration: 0.15s;
  opacity: 1;
  animation-fill-mode: ${(p) => (p.unmounting ? "forwards" : "backwards")};

  @media (max-width: 550px) {
    font-size: 22px;
    margin-bottom: 10px;
  }
`

export const Dates = styled.h3`
  animation-name: ${(p) => (p.unmounting ? fadeOut : fadeIn)};
  animation-delay: ${(p) => (p.unmounting ? "0.15s" : "0.05s")};
  animation-duration: 0.15s;
  opacity: 1;
  animation-fill-mode: ${(p) => (p.unmounting ? "forwards" : "backwards")};
`

export const Description = styled.p`
  animation-name: ${(p) => (p.unmounting ? fadeOut : fadeIn)};
  animation-delay: ${(p) => (p.unmounting ? "0s" : "0.1s")};
  animation-duration: 0.15s;
  opacity: 1;
  animation-fill-mode: ${(p) => (p.unmounting ? "forwards" : "backwards")};
`

export const ButtonRow = styled.div`
  display: flex;
`

export const Button = styled.img`
  max-height: 30px;
  margin-right: 20px;
  animation-name: ${(p) => (p.unmounting ? fadeDown : fadeUp)};
  animation-delay: ${(p) => `${p.unmounting ? 0 : 0.3 + p.index / 10}s`};
  animation-duration: 0.25s;
  animation-fill-mode: ${(p) => (p.unmounting ? "forwards" : "backwards")};
  opacity: 0.7;
  transition: 0.15s;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`

export const TechnologiesCont = styled.div`
  display: flex;
  margin-bottom: 15px;
  flex-wrap: wrap;
`

export const TechnologyName = styled.div`
  color: white;
  background: rgba(255, 255, 255, 0.3);
  margin-right: 15px;
  margin-bottom: 15px;
  padding: 5px 10px;
  border-radius: 7px;
  animation-name: ${(p) => (p.unmounting ? fadeDown : fadeUp)};
  animation-delay: ${(p) => `${p.unmounting ? 0 : 0.3 + p.index / 10}s`};
  animation-duration: 0.25s;
  animation-fill-mode: ${(p) => (p.unmounting ? "forwards" : "backwards")};
`
