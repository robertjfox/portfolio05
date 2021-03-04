import styled, { keyframes, css } from "styled-components"

const workTileIn = keyframes`
  0% {opacity: 0; transform:  scale(.75); width: 0%; margin-right: 0px;}
  24% {opacity: 0};
`

const workTileOut = keyframes`
  50% {opacity: 0}
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
  width: ${(p) => (p.larger ? "60%" : "50%")};
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
  height: calc(70vw * 0.3);
  max-height: 300px;
  max-width: 1000px;
  margin-bottom: 40px;
  position: relative;
`

export const WorkTileRoot = styled.div`
  background: linear-gradient(
    310deg,
    rgba(255, 255, 255, 0.35),
    rgba(255, 255, 255, 0.1)
  );
  filter: contrast(0.6);
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
  animation-duration: 1s;
  animation-fill-mode: ${(p) => (p.animateOut ? "forwards" : "backwards")};

  &:hover {
    filter: contrast(1);
  }

  &:hover > ${LogoImg} {
    opacity: 0.75;
    transform: translateY(-20px) scale(0.95);
  }

  &:hover > ${Title} {
    opacity: 0.5;
    top: 90%;
  }

  ${(p) =>
    p.selected &&
    css`
      filter: contrast(1);
      & > ${LogoImg} {
        opacity: 0.75;
        transform: translateY(-20px) scale(0.95);
      }
      & > ${Title} {
        opacity: 0.5;
        top: 90%;
      }
    `}
`
