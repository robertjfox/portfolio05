import React, { createContext, useState } from "react"
import Theme from "./Theme"
import * as S from "./App.styles"
import Navigation from "~/screens/navigation"
import Background from "~/screens/background"
import Landing from "~/screens/landing/Landing"
import About from "~/screens/about/About"
import Work from "~/screens/work/Work"
import Contact from "~/screens/contact/Contact"
import Cursor from "~/components/Cursor"

export const MountingContext = createContext(false)

export const App = () => {
  const [screen, setScreen] = useState("landing")
  const [navSelection, setNavSelection] = useState("landing")
  const [unmounting, setUnmounting] = useState(false)

  const handleSetScreen = (newScreen) => {
    if (newScreen === screen) return
    setUnmounting(true)
    setNavSelection(newScreen)
    setTimeout(() => {
      setUnmounting(false)
      setScreen(newScreen)
    }, 600)
  }

  return (
    <MountingContext.Provider value={unmounting}>
      <Theme>
        <S.AppRoot>
          <Cursor />
          <Background />
          <S.AppContent>
            <Navigation
              setScreen={handleSetScreen}
              screen={screen}
              navSelection={navSelection}
            />
            {screen === "landing" && <Landing />}
            {screen === "about" && <About />}
            {screen === "work" && <Work unmounting={unmounting} />}
            {screen === "contact" && <Contact />}
          </S.AppContent>
        </S.AppRoot>
      </Theme>
    </MountingContext.Provider>
  )
}

export default App
