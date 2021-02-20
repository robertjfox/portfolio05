import React from "react"
import * as S from "./Work.styles"

const Work = () => {
  return (
    <S.WorkRoot>
      <S.WorkBox index={0} />
      <S.WorkBox index={1} />
      <S.WorkBox index={2} />
    </S.WorkRoot>
  )
}

export default Work
