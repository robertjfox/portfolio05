import styled, { keyframes, css } from "styled-components"
import Div100vh from "react-div-100vh"

const workContIn = keyframes`
  0% {transform: translateX(50%); height: 10vw;};
`

const workContOut = keyframes`
  100% {transform: translateX(50%); height: 10vw;};
`

const workTileIn = keyframes`
  0% {opacity: 0; transform: scale(.75); width: 0px;  margin-right: 0px;}
  24% {opacity: 0};
`

const workTileOut = keyframes`
  40% {opacity: 0};
  100% {opacity: 0; transform: scale(.75); width: 0px; margin-right: 0px;}
`

const workTileInMobile = keyframes`
  0%  {opacity: 0; height: 0px; min-height: unset; margin: 0;};
`

const workTileOutMobile = keyframes`
  100%  {opacity: 0; height: 0px; min-height: unset; margin: 0;}
`

export const WorkRoot = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
`

export const LogoImg = styled.img`
  width: ${(p) => (p.larger ? "60%" : "50%")};
  opacity: 0.4;
  transition: 0.6s;

  @media (max-width: 550px) {
    display: none;
  }
`

export const Title = styled.p`
  position: absolute;
  opacity: 0;
  top: 100%;
  transform: translateY(-100%);
  transition: 0.4s;
  font-size: 1.5rem;

  @media (max-width: 550px) {
    position: relative;
    transform: none;
    top: 0%;
    opacity: 1;
  }
`

export const WorkTilesContainer = styled.div`
  display: flex;
  width: 70vw;
  align-items: center;
  height: 22vw;
  max-height: 300px;
  max-width: 1000px;
  margin-bottom: 40px;
  position: relative;
  animation-name: ${(p) => (p.unmounting ? workContOut : workContIn)};
  animation-duration: 1s;

  @media (max-width: 550px) {
    display: none;
  }
`

export const WorkMobile = styled(Div100vh)`
  box-sizing: border-box;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 20px 20px 100px;
  overflow: scroll;

  @media (min-width: 550px) {
    display: none;
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
  height: 22vw;
  max-height: 300px;
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
    width: 100%;
    margin-bottom: 20px;
    min-height: 84px;
    height: 84px;
    animation-name: ${(p) =>
      p.animateOut ? workTileOutMobile : workTileInMobile};

    ${(p) =>
      p.selected &&
      css`
        filter: contrast(1);
      `}
  }

  @media (min-width: 550px) {
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
  }
`
