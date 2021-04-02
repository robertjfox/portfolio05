import React from "react"
import * as S from "./PhotoViewer.styles"
import { useIsPhoneScreen } from "~/hooks/useIsPhoneScreen"

export const PhotoViewer = ({ photos, onClose }) => {
  const isPhoneScreen = useIsPhoneScreen()

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isPhoneScreen ? 1 : 1.5,
    slidesToScroll: 1,
  }

  return (
    <S.Container>
      <S.Background onClick={onClose} />
      <S.InnerContainer>
        <S.Slider {...settings}>
          {photos.map((src) => (
            <S.Slide>
              <S.SlideImg src={src} />
            </S.Slide>
          ))}
        </S.Slider>
      </S.InnerContainer>
    </S.Container>
  )
}
