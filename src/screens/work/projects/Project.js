import React, { useState } from "react"
import * as S from "./Project.styles"
import PROJECT_DATA from "../Work.data"
import iconWebsite from "~/assets/icons/iconWebsite.png"
import iconPhotos from "~/assets/icons/iconPhotos.png"

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
        <S.ButtonRow>
          <a
            href="https://www.linkedin.com/in/robert-fox-1b341996/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.Button
              src={process.env.PUBLIC_URL + iconWebsite}
              alt="contact"
              unmounting={unmounting}
              index={0}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/robert-fox-1b341996/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.Button
              src={process.env.PUBLIC_URL + iconPhotos}
              alt="contact"
              unmounting={unmounting}
              index={1}
            />
          </a>
        </S.ButtonRow>
      </S.TileDecription>
      <S.CloseButton onClick={_handleDeselection}> X </S.CloseButton>
    </>
  )
}

export default ProjectAvantStay
