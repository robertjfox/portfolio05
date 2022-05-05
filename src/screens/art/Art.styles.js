import styled, { keyframes } from "styled-components"
import _Slider from "react-slick"

const fadeIn = keyframes`
  0% {
    transform: scale(.5); opacity: 0;
  }
  20% {
    opacity: 0;
  }
`

const fadeOut = keyframes`
  100% {
    transform: scale(.5); opacity: 0;
  }
  80% {
    opacity: 0;
  }
`

export const ArtContainer = styled.div`
  width: 100vw;

  ${(p) => !p.show && "display: none"};
`

export const Slider = styled(_Slider)`
  & .slick-slide div {
    outline: none !important;
  }

  & div.slick-slide {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & ul.slick-dots {
    bottom: 50px;
  }

  & .slick-dots li button:before {
    color: white;
    transform: scale(2);
  }

  @media (max-wdith: 550px) {
    & ul.slick-dots {
      bottom: 150px;
    }
  }
`

export const Slide = styled.div`
  display: flex;
  align-items: center;
  animation-name: ${(p) => (p.theme.unmounting ? fadeOut : fadeIn)};
  animation-duration: ${(p) => (p.theme.unmounting ? 0.5 : 1)}s;
  animation-fill-mode: ${(p) =>
    p.theme.unmounting ? "forwards" : "backwards"};
`

export const SlideImg = styled.img`
  opacity: ${(p) => (p.isCurrent ? 1 : 0.3)};
  width: ${(p) => (p.isCurrent ? "26vw" : "23vw")};
  transition: 0.5s ease-in;
  @media (max-width: 550px) {
    width: 25vw;
    opacity: 1;
    width: 90vw;
  }
`
