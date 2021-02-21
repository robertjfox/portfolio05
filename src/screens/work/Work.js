import React, { useState } from "react"
import * as S from "./Work.styles"
import PROJECT_DATA from "./Work.data"
import ProjectAvantStay from "./projects/ProjectAvantstay"

const WorkTile = ({
  index,
  project,
  selected,
  handleSelection,
  animateOut,
}) => {
  const projectData = PROJECT_DATA[project]
  const { title, logo } = projectData

  return (
    <S.WorkTileRoot
      animateOut={animateOut}
      index={index}
      onClick={() => handleSelection(project)}
      selected={selected}
    >
      <S.LogoImg src={logo} />
      <S.Title>{title}</S.Title>
    </S.WorkTileRoot>
  )
}

const Work = () => {
  const [selectedTile, setSelectedTile] = useState("")
  const [selectedProject, setSelectedProject] = useState("")
  const [showTileDescription, setShowTileDescription] = useState(false)
  const [unmoutingSelection, setUnmountingSelection] = useState(false)

  const handleSelection = (project) => {
    setSelectedTile(project)
    setTimeout(() => {
      setShowTileDescription(true)
    }, 1200)
  }

  const handleDeselection = () => {
    setUnmountingSelection(true)
    setTimeout(() => {
      setShowTileDescription(false)
      setSelectedProject("")
      setSelectedTile("")
    }, 1000)
  }

  const PROJECT_NAMES = ["test", "avantstay", "test2"]

  return (
    <S.WorkRoot>
      <S.WorkTilesContainer>
        {PROJECT_NAMES.map((project, index) => {
          const selected = selectedTile === project

          if (!showTileDescription || selected) {
            return (
              <WorkTile
                index={index}
                project={project}
                animateOut={!!selectedTile && !selected}
                selected={selected}
                handleSelection={handleSelection}
              />
            )
          }
        })}

        {showTileDescription && (
          <>
            <S.TileDecription unmoutingSelection={unmoutingSelection}>
              <h1>Lorem Ipsum Dolorum</h1>
              <h2>Lorem Ipsum Dolorum Ignolospom</h2>
              <h3>Lorem Ipsum Dolorum Ignolospom</h3>
            </S.TileDecription>
            <h1 onClick={handleDeselection}>x</h1>
          </>
        )}
      </S.WorkTilesContainer>
      {selectedProject === "avantstay" && <ProjectAvantStay />}
    </S.WorkRoot>
  )
}

export default Work
