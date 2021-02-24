import React, { useState } from "react"
import * as S from "./Project.styles"
import PROJECT_DATA from "../Work.data"

const ProjectAvantStay = ({ handleDeselection, project }) => {
  const projectData = PROJECT_DATA[project]
  const { role, dates, description } = projectData
  const [unmounting, setUnmounting] = useState(false)

  const _handleDeselection = () => {
    setUnmounting(true)
    handleDeselection()
  }

  return (
    <>
      <S.TileDecription>
        <S.Role unmounting={unmounting}>{role}</S.Role>
        <S.Dates unmounting={unmounting}>{dates}</S.Dates>
        <br />
        <S.Description unmounting={unmounting}>{description}</S.Description>
        <br />
        {/* <S.ButtonRow>
          <button>Test</button>
          <button>Test</button>
          <button>Test</button>
        </S.ButtonRow> */}
      </S.TileDecription>
      <S.CloseButton onClick={_handleDeselection}> X </S.CloseButton>
    </>
  )
}

export default ProjectAvantStay
