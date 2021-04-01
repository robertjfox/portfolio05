import styled, { keyframes, css } from "styled-components"

const workContIn = keyframes`
  0% {transform: translateX(50%); height: 15%;};
`

const workContOut = keyframes`
  100% {transform: translateX(50%); height: 15%;};
`

const workTileIn = keyframes`
  0% {opacity: 0; transform: scale(.75); width: 0%;  margin-right: 0px;}
  24% {opacity: 0};
`

const workTileOut = keyframes`
  40% {opacity: 0};
  100% {opacity: 0; transform: scale(.75); width: 0px; margin-right: 0px;}
`

export const WorkRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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
  animation-name: ${(p) => (p.unmounting ? workContOut : workContIn)};
  animation-duration: 1s;

  @media (max-width: 550px) {
    flex-direction: column;
    max-height: unset;
    height: 70vh;
    width: 100vw;
    align-items: center;
    justify-content: space-between;
  }
`

export const WorkTileRoot = styled.div`
  background: linear-gradient(
    310deg,
    rgba(255, 255, 255, 0.25),
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
  animation-delay: 0s;
  animation-duration: 1s;
  animation-fill-mode: ${(p) => (p.animateOut ? "forwards" : "backwards")};

  @media (max-width: 550px) {
    height: 30%;
    width: calc(70vh * 0.3);
  }

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
