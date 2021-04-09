import React from "react"
import * as S from "./About.styles"
import headshot from "~/assets/images/headshot.jpg"

const About = () => {
  return (
    <>
      <S.AboutRoot>
        <S.BracketLeft>{`{`}</S.BracketLeft>
        <S.KeyValueContainer>
          <S.KeyValue index={0}>"who" : "robert fox"</S.KeyValue>
          <S.KeyValue index={1}>"where" : "brooklyn, new york"</S.KeyValue>
          <S.KeyValue index={2}>
            "what" : [ "front end developer", "digital designer" ]
          </S.KeyValue>
          <S.KeyValue index={3}>
            "how" : [ "typescript", "react", "graphQL" ]
          </S.KeyValue>
        </S.KeyValueContainer>
        <S.BracketRight>{`}`}</S.BracketRight>
      </S.AboutRoot>
      <S.AboutMobile>
        <S.Headshot src={headshot} />
        <S.AboutMobileCopy>
          Hello! My Name is Robert Fox and I am a web developer and designer
          based in New York City.
          <br />
          <br />I have a passion for designing and developing seamless user
          experiences and vibrant digital products. I am a natural communicator,
          effective problem solver and enjoy working on teams, both large and
          small. I also have a formal graphic design background, and a a strong
          attention to detail.
          <br />
          <br />I have a passion for designing and developing seamless user
          experiences and vibrant digital products. I am a natural communicator,
          effective problem solver and enjoy working on teams, both large and
          small. I also have a formal graphic design background, and a a strong
          attention to detail.
        </S.AboutMobileCopy>
      </S.AboutMobile>
    </>
  )
}

export default About
