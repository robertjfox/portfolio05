import React, { useState } from "react"
import * as S from "./About.styles"

const About = () => {
  const [tab, setTab] = useState("who")

  return (
    <S.AboutRoot>
      <S.Circle>
        <S.Tab onClick={() => setTab("who")} selected={tab === "who"} index={1}>
          who
        </S.Tab>
        <S.Tab
          onClick={() => setTab("what")}
          selected={tab === "what"}
          index={2}
        >
          what
        </S.Tab>
        <S.Tab onClick={() => setTab("why")} selected={tab === "why"} index={3}>
          why
        </S.Tab>
      </S.Circle>
    </S.AboutRoot>
  )
}

export default About
