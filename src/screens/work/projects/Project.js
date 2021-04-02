import React, { useState, useEffect } from "react"
import * as S from "./Project.styles"
import PROJECT_DATA from "../Work.data"
import iconWebsite from "~/assets/icons/iconWebsite.png"
import iconPhotos from "~/assets/icons/iconPhotos.png"
import { PhotoViewer } from "~/screens/work/photoViewer/PhotoViewer"

const ProjectAvantStay = ({
  handleDeselection,
  project,
  unmounting,
  setUnmountFromProject,
}) => {
  const projectData = PROJECT_DATA[project]
  const { role, dates, description, url, photos, technologies } = projectData
  const [unmountingLocal, setUnmountingLocal] = useState(false)
  const [showPhotos, setShowPhotos] = useState(false)

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
      <S.ProjectRoot>
        <S.Role unmounting={unmountingLocal}>{role}</S.Role>
        <S.Dates unmounting={unmountingLocal}>{dates}</S.Dates>
        <br />
        <S.Description unmounting={unmountingLocal}>
          {description.map((par) => {
            return (
              <>
                {par}
                <br />
                <br />
              </>
            )
          })}
        </S.Description>
        <S.TechnologiesCont>
          {!!technologies &&
            technologies.map((tech) => (
              <S.TechnologyName>{tech}</S.TechnologyName>
            ))}
        </S.TechnologiesCont>
        <S.ButtonRow>
          <a href={url} target="_blank" rel="noopener noreferrer" id="link">
            <S.Button
              src={process.env.PUBLIC_URL + iconWebsite}
              alt="contact"
              unmounting={unmountingLocal}
              index={0}
            />
          </a>
          <S.Button
            src={process.env.PUBLIC_URL + iconPhotos}
            alt="contact"
            unmounting={unmountingLocal}
            index={1}
            onClick={() => setShowPhotos(true)}
          />
        </S.ButtonRow>
      </S.ProjectRoot>
      <S.CloseButton id="link" onClick={_handleDeselection}>
        {" "}
        X{" "}
      </S.CloseButton>
      {showPhotos && (
        <PhotoViewer photos={photos} onClose={() => setShowPhotos(false)} />
      )}
    </>
  )
}

export default ProjectAvantStay
