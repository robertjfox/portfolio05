import React, { createContext, useState } from "react"
import Theme from "./Theme"
import * as S from "./App.styles"
import Navigation from "~/screens/navigation"
import Background from "~/screens/background"
import Landing from "~/screens/landing/Landing"
import About from "~/screens/about/About"
import Work from "~/screens/work/Work"
import Cursor from "~/components/Cursor"

export const MountingContext = createContext(false)

export const App = () => {
  const [screen, setScreen] = useState("landing")
  const [unmounting, setUnmounting] = useState(false)

  const handleSetScreen = (newScreen) => {
    setUnmounting(true)
    setTimeout(() => {
      setUnmounting(false)
      setScreen(newScreen)
    }, 1000)
  }

  return (
    <MountingContext.Provider value={unmounting}>
      <Theme>
        <S.AppRoot>
          <Cursor />
          <Background />
          <S.AppContent>
            <Navigation setScreen={handleSetScreen} />
            {screen === "landing" && <Landing />}
            {screen === "about" && <About />}
            {screen === "work" && <Work />}
          </S.AppContent>
        </S.AppRoot>
      </Theme>
    </MountingContext.Provider>
  )
}

export default App
