import React from "react"
import data from "./assets"
import { useIsPhoneScreen } from "~/hooks/useIsPhoneScreen"
import * as S from "./Art.styles"

const Art = ({ show }) => {
  const isPhoneScreen = useIsPhoneScreen()

  var settings = {
    dots: isPhoneScreen,
    infinite: true,
    speed: 1000,
    slidesToShow: isPhoneScreen ? 1 : 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
  }

  console.log(data)

  return (
    <S.ArtContainer show={show}>
      <S.Slider {...settings}>
        {data?.photos.map((src, index) => (
          <S.Slide index={index}>
            <S.SlideImg src={src} />
          </S.Slide>
        ))}
      </S.Slider>
    </S.ArtContainer>
  )
}

export default Art
