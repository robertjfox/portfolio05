import React from "react"
import data from "./assets"
import { useIsPhoneScreen } from "~/hooks/useIsPhoneScreen"
import * as S from "./Art.styles"

const Art = () => {
  const isPhoneScreen = useIsPhoneScreen()

  var settings = {
    dots: false,
    infinite: false,
    speed: 750,
    slidesToShow: isPhoneScreen ? 1 : 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: !isPhoneScreen,
  }

  return (
    <S.ArtContainer>
      <S.Slider {...settings}>
        {data?.photos.map((src) => (
          <S.Slide>
            <S.SlideImg src={src} />
          </S.Slide>
        ))}
        <S.Slide />
      </S.Slider>
    </S.ArtContainer>
  )
}

export default Art
