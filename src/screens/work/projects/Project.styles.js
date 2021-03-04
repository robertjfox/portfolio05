import styled, { keyframes } from "styled-components"

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

export const TileDecription = styled.div`
  width: 60%;
  margin-left: 6%;
  display: flex;
  flex-direction: column;
  height: 70vw * 0.3;
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
`

export const Dates = styled.h3`
  animation-name: ${(p) => (p.unmounting ? fadeOut : fadeIn)};
  animation-delay: ${(p) => (p.unmounting ? "0.15s" : "0.15s")};
  animation-duration: 0.15s;
  opacity: 1;
  animation-fill-mode: ${(p) => (p.unmounting ? "forwards" : "backwards")};
`

export const Description = styled.p`
  animation-name: ${(p) => (p.unmounting ? fadeOut : fadeIn)};
  animation-delay: ${(p) => (p.unmounting ? "0s" : "0.3s")};
  animation-duration: 0.15s;
  opacity: 1;
  animation-fill-mode: ${(p) => (p.unmounting ? "forwards" : "backwards")};
`

export const ButtonRow = styled.div`
  display: flex;
  width: 2;
  margin-top: auto;
`

export const Button = styled.img`
  max-height: 30px;
  margin-right: 20px;
  animation-name: ${(p) => (p.unmounting ? fadeDown : fadeUp)};
  animation-delay: ${(p) => `${p.unmounting ? 0 : 0.3 + p.index / 10}s`};
  animation-duration: 0.25s;
  animation-fill-mode: ${(p) => (p.unmounting ? "forwards" : "backwards")};
`
