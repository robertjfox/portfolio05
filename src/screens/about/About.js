import React from "react"
import * as S from "./About.styles"

const About = () => {
  return (
    <S.AboutRoot>
      <S.BracketLeft>{`{`}</S.BracketLeft>
      <S.KeyValueContainer>
        <S.KeyValue index={0}>"who" : "robert fox"</S.KeyValue>
        <S.KeyValue index={1}>"where" : "los angeles, california"</S.KeyValue>
        <S.KeyValue index={2}>
          "what" : [ "front end developer", "digital designer" ]
        </S.KeyValue>
        <S.KeyValue index={3}>
          "how" : [ "typescript", "react", "graphQL" ]
        </S.KeyValue>
      </S.KeyValueContainer>
      <S.BracketRight>{`}`}</S.BracketRight>
    </S.AboutRoot>
  )
}

export default About
