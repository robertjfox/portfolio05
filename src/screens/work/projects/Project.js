import React, { useState, useEffect } from "react"
import * as S from "./Project.styles"
import PROJECT_DATA from "../Work.data"
import iconWebsite from "~/assets/icons/iconWebsite.png"
import iconPhotos from "~/assets/icons/iconPhotos.png"

const ProjectAvantStay = ({
  handleDeselection,
  project,
  unmounting,
  setUnmountFromProject,
}) => {
  const projectData = PROJECT_DATA[project]
  const { role, dates, description } = projectData
  const [unmountingLocal, setUnmountingLocal] = useState(false)

  const _handleDeselection = () => {
    setUnmountingLocal(true)
    handleDeselection()
  }

  useEffect(() => {
    if (unmounting) {
      setUnmountingLocal(true)
      setTimeout(() => {
        setUnmountFromProject(true)
      }, 250)
    }
  }, [unmounting])

  return (
    <>
      <S.TileDecription>
        <S.Role unmounting={unmountingLocal}>{role}</S.Role>
        <S.Dates unmounting={unmountingLocal}>{dates}</S.Dates>
        <br />
        <S.Description unmounting={unmountingLocal}>
          {description}
        </S.Description>
        <br />
        <S.ButtonRow>
          <a
            href="https://www.linkedin.com/in/robert-fox-1b341996/"
            target="_blank"
            rel="noopener noreferrer"
            id="link"
          >
            <S.Button
              src={process.env.PUBLIC_URL + iconWebsite}
              alt="contact"
              unmounting={unmountingLocal}
              index={0}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/robert-fox-1b341996/"
            target="_blank"
            rel="noopener noreferrer"
            id="link"
          >
            <S.Button
              src={process.env.PUBLIC_URL + iconPhotos}
              alt="contact"
              unmounting={unmountingLocal}
              index={1}
            />
          </a>
        </S.ButtonRow>
      </S.TileDecription>
      <S.CloseButton id="link" onClick={_handleDeselection}>
        {" "}
        X{" "}
      </S.CloseButton>
    </>
  )
}

export default ProjectAvantStay
