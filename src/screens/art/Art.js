import React, { useState } from "react"
import data from "./assets"
import { useIsPhoneScreen } from "~/hooks/useIsPhoneScreen"
import * as S from "./Art.styles"

const Art = ({ show }) => {
  const [curIndex, setCurIndex] = useState(0)
  const isPhoneScreen = useIsPhoneScreen()

  const handleChange = (index) => {
    setCurIndex(index)
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: isPhoneScreen ? 1 : 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: !isPhoneScreen,
  }

  return (
    <S.ArtContainer show={show}>
      <S.Slider {...settings}>
        {data?.photos.map((src, index) => (
          <S.Slide index={index}>
            <S.SlideImg
              src={src}
              isCurrent={curIndex === index}
              onClick={() => handleChange(index)}
            />
          </S.Slide>
        ))}
      </S.Slider>
    </S.ArtContainer>
  )
}

export default Art
