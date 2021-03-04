import React from "react"
import * as S from "./Landing.styles"
import headshot from "~/assets/images/headshot.jpg"

const Text = ({ string, delay: baseDelay }) => {
  const splitStr = string.split("")
  return (
    <S.CharsCont>
      {splitStr.map((char, index) => (
        <S.Char baseDelay={baseDelay} index={index} space={char === " "}>
          {char}
        </S.Char>
      ))}
    </S.CharsCont>
  )
}

const Landing = () => {
  return (
    <S.LandingRoot>
      <S.HeadshotCont>
        <S.Headshot src={headshot} />
      </S.HeadshotCont>
      <S.TextCont>
        <Text string="Robert Fox" delay={0} />
        <Text string="Web Developer" delay={1} />
        <Text string="Digital Designer" delay={2} />
      </S.TextCont>
    </S.LandingRoot>
  )
}

export default Landing
