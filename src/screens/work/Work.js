import React, { useImperativeHandle, useState } from "react"
import * as S from "./Work.styles"
import PROJECT_DATA from "./Work.data"
import Project from "./projects/Project"
import { useIsPhoneScreen } from "~/hooks/useIsPhoneScreen"

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
      id={"link"}
    >
      <S.LogoImg src={logo} larger={project === "rentroom"} />
      <S.Title>{title}</S.Title>
    </S.WorkTileRoot>
  )
}

const Work = ({ unmounting }) => {
  const [selectedTile, setSelectedTile] = useState("")
  const [selectedProject, setSelectedProject] = useState("")
  const [showTileDescription, setShowTileDescription] = useState(false)
  const [unmountFromProject, setUnmountFromProject] = useState(false)
  const unmountNoProject = unmounting && !selectedTile

  const isPhoneScreen = useIsPhoneScreen()

  const handleSelection = (project, index) => {
    setSelectedTile(project)
    setSelectedProject(project)
    setTimeout(() => {
      setShowTileDescription(true)
    }, 600 + index * 300)
  }

  const handleDeselection = () => {
    setTimeout(() => {
      setShowTileDescription(false)
      setSelectedProject("")
      setSelectedTile("")
    }, 400)
  }

  const PROJECT_NAMES = ["avantstay", "rentroom", "cultivateFruits"]

  return (
    <>
      <S.WorkRoot>
        <S.WorkTilesContainer unmounting={unmountNoProject}>
          {PROJECT_NAMES.map((project, index) => {
            const selected = selectedTile === project && !isPhoneScreen

            if (!showTileDescription || selected) {
              return (
                <WorkTile
                  index={index}
                  project={project}
                  animateOut={
                    unmountFromProject ||
                    unmountNoProject ||
                    (!!selectedTile && !selected)
                  }
                  selected={selected}
                  handleSelection={handleSelection}
                />
              )
            }
          })}
          {!!selectedProject && !isPhoneScreen && showTileDescription && (
            <Project
              handleDeselection={handleDeselection}
              project={selectedProject}
              unmounting={unmounting}
              setUnmountFromProject={setUnmountFromProject}
            />
          )}
        </S.WorkTilesContainer>
      </S.WorkRoot>
      {isPhoneScreen && !!selectedProject && showTileDescription && (
        <Project
          handleDeselection={handleDeselection}
          project={selectedProject}
          unmounting={unmounting}
          setUnmountFromProject={setUnmountFromProject}
        />
      )}
    </>
  )
}

export default Work
