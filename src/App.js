import React from "react";
import Theme from "./Theme";
import * as S from './App.styles'
import {SocialLinks} from '~/screens/navigation/SocialLinks'
import Background from '~/screens/background'

const App = () => {
  return (
    <Theme>
      <S.AppRoot>
        <Background />
        <S.AppContent>
        <SocialLinks />
        </S.AppContent>
      </S.AppRoot>
    </Theme>
  );
};

export default App;
