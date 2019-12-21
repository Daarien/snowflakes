import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import MainPage from './Main';
import SberChatPage from './SberChatPage';

import RegularEot from '../fonts/SBSansDisplay/SBSansDisplay-Regular.eot';
import RegularWoff from '../fonts/SBSansDisplay/SBSansDisplay-Regular.woff';
import RegularTtf from '../fonts/SBSansDisplay/SBSansDisplay-Regular.ttf';
import SemiEot from '../fonts/SBSansDisplay/SBSansDisplay-SemiBold.eot';
import SemiWoff from '../fonts/SBSansDisplay/SBSansDisplay-SemiBold.woff';
import SemiTtf from '../fonts/SBSansDisplay/SBSansDisplay-SemiBold.ttf';
import BoldEot from '../fonts/SBSansDisplay/SBSansDisplay-Bold.eot';
import BoldSvg from '../fonts/SBSansDisplay/SBSansDisplay-Bold.svg';
import BoldTtf from '../fonts/SBSansDisplay/SBSansDisplay-Bold.ttf';
import BoldWoff from '../fonts/SBSansDisplay/SBSansDisplay-Bold.woff';

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: SBSansDisplay;
    font-weight: normal;
    src: url('${RegularEot}?') format('eot');
    src: url('${RegularWoff}') format('woff');
    src: url('${RegularTtf}') format('opentype');
  }
  @font-face {
    font-family: SBSansDisplay;
    font-weight: 500;
    src: url('${SemiEot}?') format('eot');
    src: url('${SemiWoff}') format('woff');
    src: url('${SemiTtf}') format('opentype');
  }
  @font-face {
    font-family: SBSansDisplay;
    font-weight: bold;
    src: url('${BoldEot}?') format('eot');
    src: url('${BoldWoff}') format('woff');
    src: url('${BoldTtf}') format('opentype');
    src: url('${BoldSvg}') format('svg');
  }
`;

function App() {
  return (
    <>
      <GlobalFonts />
      <BrowserRouter>
        <Switch>
          <Route path="/happynewyear" component={SberChatPage} />
          <Route path="/" component={MainPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
