import React, { useState } from "react"
import Theme from "./Theme"
import * as S from "./App.styles"
import Navigation from "~/screens/navigation"
import Background from "~/screens/background"
import Landing from "~/screens/landing/Landing"
import About from "~/screens/about/About"
import Cursor from "~/components/Cursor"

export const App = () => {
  const [screen, setScreen] = useState("landing")

  return (
    <Theme>
      <S.AppRoot>
        <Cursor />
        <Background />
        <S.AppContent>
          <Navigation setScreen={setScreen} />
          {screen === "landing" && <Landing />}
          {screen === "about" && <About />}
        </S.AppContent>
      </S.AppRoot>
    </Theme>
  )
}

export default App
