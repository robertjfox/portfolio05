import React, { useState } from "react"
import * as S from "./Work.styles"
import PROJECT_DATA from "./Work.data"
import Project from "./projects/Project"

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
      onClick={() => handleSelection(project, index)}
      selected={selected}
    >
      <S.LogoImg src={logo} larger={project === "rentroom"} />
      <S.Title>{title}</S.Title>
    </S.WorkTileRoot>
  )
}

const Work = () => {
  const [selectedTile, setSelectedTile] = useState("")
  const [selectedProject, setSelectedProject] = useState("")
  const [showTileDescription, setShowTileDescription] = useState(false)

  const handleSelection = (project, index) => {
    setSelectedTile(project)
    setSelectedProject(project)
    setTimeout(() => {
      setShowTileDescription(true)
    }, 600 + index * 200)
  }

  const handleDeselection = () => {
    setTimeout(() => {
      setShowTileDescription(false)
      setSelectedProject("")
      setSelectedTile("")
    }, 400)
  }

  const PROJECT_NAMES = ["avantstay", "rentroom", "test2"]

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
            {!!selectedProject && (
              <Project
                handleDeselection={handleDeselection}
                project={selectedProject}
              />
            )}
          </>
        )}
      </S.WorkTilesContainer>
    </S.WorkRoot>
  )
}

export default Work
