import styled, { keyframes, css } from "styled-components"

const workTileIn = keyframes`
  0% {opacity: 0; transform:  scale(.75); width: 0%}
`

const workTileOut = keyframes`
  50% {opacity: 0; transform:  scale(.75); width: 30%; margin-right: 3%;};
  100% {opacity: 0; transform:  scale(.75); width: 0px; margin-right: 0px;}
`

export const WorkRoot = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LogoImg = styled.img`
  width: 50%;
  opacity: 0.4;
  transition: 0.6s;
`

export const Title = styled.p`
  position: absolute;
  opacity: 0;
  top: 100%;
  transform: translateY(-100%);
  transition: 0.4s;
  font-size: 1.5rem;
`

export const WorkTilesContainer = styled.div`
  display: flex;
  align-items: stretch;
  width: 70vw;
  height: calc(70vw * 0.33 - 40px);
  max-width: 1000px;
  margin-bottom: 40px;
`

export const TileDecription = styled.div`
  width: 60%;
  margin-left: 6%;
`

export const WorkTileRoot = styled.div`
  background: rgba(255, 255, 255, 0.1);
  margin-right: 3%;
  width: 30%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 0.2s ease-in;
  animation-name: ${(p) => (p.animateOut ? workTileOut : workTileIn)};
  animation-delay: ${(p) => (p.animateOut ? 0 : p.index / 6)}s;
  animation-duration: 1.2s;
  animation-fill-mode: ${(p) => (p.animateOut ? "forwards" : "backwards")};

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &:hover > ${LogoImg} {
    opacity: 0.75;
    width: 55%;
    transform: translateY(-20px);
  }

  &:hover > ${Title} {
    opacity: 0.5;
    top: 90%;
  }

  ${(p) =>
    p.selected &&
    css`
      background: rgba(255, 255, 255, 0.2);
      & > ${LogoImg} {
        opacity: 0.75;
        width: 55%;
        transform: translateY(-20px);
      }
      & > ${Title} {
        opacity: 0.5;
        top: 90%;
      }
    `}
`
