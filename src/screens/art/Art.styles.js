import styled from "styled-components"
import _Slider from "react-slick"

export const ArtContainer = styled.div`
  width: 100vw;
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
`

export const Slide = styled.div`
  width: 30vw;
  display: flex;
  align-items: center;

  @media (max-wdith: 550px) {
    width: 100vw;
  }
`

export const SlideImg = styled.img`
  width: 25vw;
  @media (max-width: 550px) {
    width: 100vw;
    transform: none;
  }
`
