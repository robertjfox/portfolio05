import styled, { keyframes } from "styled-components"
import _Slider from "react-slick"

const fadeIn = keyframes`0% {opacity: 0}`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  animation-name: ${fadeIn};
  animation-duration: 0.35s;
`

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
`

export const InnerContainer = styled.div`
  width: 100vw;
  z-index: 999;
`

export const Slider = styled(_Slider)`
  & .slick-slide div {
    outline: none !important;
  }
`

export const Slide = styled.div``

export const SlideImg = styled.img`
  width: 50vw;
  transform: translateX(25vw);

  @media (max-width: 550px) {
    width: 100vw;
    transform: none;
  }
`
