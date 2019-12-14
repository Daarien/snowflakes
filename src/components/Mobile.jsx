import React, { useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

import AppContext from '../context';
import UserSnowFlake from './UserSf';

import { Flex } from './custom';
import logoImage from '../img/logo.png';
import iosQRCodeImage from '../img/qr-2-ios@3x.png';
import bg1Image from '../img/mobile/m-background-1.png';
import bg2Image from '../img/mobile/m-background-2.png';
import bg3Image from '../img/mobile/m-background-1.png';
import bg4Image from '../img/mobile/m-background-1.png';

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

export default function Mobile() {
  const { user, stage, voicesCount } = useContext(AppContext);

  return (
    <MobileContainer>
      <GlobalStyle />
      <UserSnowFlake user={user} screen="mobile" />
      <TextBlock>
        <Link to="/">
          <Logo src={logoImage} alt="logo" />
        </Link>
        <Greeting>
          <div>С наступающим</div>
          <div>Новым годом!</div>
        </Greeting>
        <Text>
          Отправь поздравление на sber@sberbank.ru или в СберЧате чат-боту <b>Sber2020</b>, чтобы
          персональная снежинка украсила новогоднюю ёлку
        </Text>
      </TextBlock>
      <TreeContainer>
        <Counter>{voicesCount}</Counter>
      </TreeContainer>
      <QRCodes>
        <div>Отсканируй QR-код для перехода в СберЧат</div>
        <img src={iosQRCodeImage} alt="qr-code-img" />
      </QRCodes>
    </MobileContainer>
  );
}

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }
`;

const MobileContainer = styled.div`
  background-image: url(${({ stage }) => getStageBg(stage)});
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 0 32px;
`;
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  z-index: 10;
  width: 100%;
  height: 52vh;
`;
const Logo = styled.img`
  width: 150px;
  margin-top: 20px;
`;
const Greeting = styled.div`
  font-size: 26px;
  font-weight: 600;
  line-height: 30px;
`;
const Text = styled.div`
  font-size: 18px;
  line-height: 30px;
`;
const TreeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 73vh;
`;
const Counter = styled.div`
  color: white;
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;
const QRCodes = styled.div`
  div {
    color: white;
    font-size: 20px;
  }
  img {
    width: 140px;
    margin: 20px 0 30px 0;
  }
`;
