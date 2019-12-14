import React, { useEffect, useRef, useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

import AppContext from '../context';
import StarShineBg from './StarShineBg';
import FallingSnowFlakesBg from './FallingSfBg';
import UserSnowFlake from './UserSf';

import logoImage from '../img/logo.png';
import iosQRCodeImage from '../img/qr-2-ios@3x.png';
import bg1Image from '../img/background-1.png';
import bg2Image from '../img/background-2.png';
import bg3Image from '../img/background-3.png';
import bg4Image from '../img/background-4.png';

function getStageBg(stage) {
  switch (stage) {
    case 0:
    case 1:
      return bg1Image;
    case 2:
      return bg2Image;
    case 3:
      return bg3Image;
    case 4:
    case 5:
      return bg4Image;
    default:
      return bg4Image;
  }
}

export default function Main() {
  const { user, stage, voicesCount } = useContext(AppContext);
  const containerSize = useRef({ height: 1920, width: 1080 });
  const appContainer = useRef(undefined);

  useEffect(() => {
    if (appContainer.current) {
      containerSize.current.height = appContainer.current.clientHeight;
      containerSize.current.width = appContainer.current.clientWidth;
    }

    return () => (containerSize.current = { height: 1920, width: 1080 });
  }, []);
  return (
    <MainContainer ref={appContainer} stage={stage}>
      <GlobalStyle />
      <FallingSnowFlakesBg />
      <StarShineBg />
      <UserSnowFlake user={user} screen="desktop" />
      <TextBlock>
        <div>
          <Link to="/mobile">
            <Logo src={logoImage} alt="logo" />
          </Link>
          <Greeting>
            <div>С наступающим</div>
            <div>Новым годом!</div>
          </Greeting>
          <Text>
            <div>Отправь поздравление на sber@sberbank.ru</div>
            <div>
              или в СберЧате чат-боту <b>Sber2020</b>, чтобы
            </div>
            <div>персональная снежинка украсила новогоднюю ёлку</div>
          </Text>
        </div>
        <QRCode>
          <p>Отсканируй QR-код для перехода в СберЧат</p>
          <Link to="/bot">
            <img src={iosQRCodeImage} width={200} alt="qr-code-img" />
          </Link>
        </QRCode>
      </TextBlock>
      <TreeContainer>
        <Counter>{voicesCount}</Counter>
      </TreeContainer>
    </MainContainer>
  );
}
const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
    font-size: 16px;
  }
`;
const MainContainer = styled.div`
  background-image: url(${({ stage }) => getStageBg(stage)});
  background-size: auto 100%;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 50%;
  margin-left: 6rem;
  color: white;
  z-index: 10;
`;
const Logo = styled.img`
  width: 12rem;
  margin: 4rem 0 5rem 0;
`;
const Greeting = styled.div`
  font-size: 4rem;
  font-weight: 600;
  line-height: 4.4rem;
  margin-bottom: 3rem;
`;

const Text = styled.div`
  font-size: 2.2rem;
  line-height: 3.5rem;
`;

const QRCode = styled.div`
  margin-bottom: 3rem;
  p {
    width: 350px;
    font-size: 1.9rem;
    line-height: 2.3rem;
  }
`;
const TreeContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-grow: 1;
`;
const Counter = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 48%;
  color: white;
  font-size: 2rem;
`;
