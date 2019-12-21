import React, { useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

import AppContext from '../context';
import UserSnowFlake from './UserSf';
import { InTextAnchor, SemiBold } from './custom';
import { getSberChatUrl } from '../funx';

import logoSberImg from '../img/logo-sber.png';
import iosQRCodeImage from '../img/qr-codes/qr-prom-bot.png';
import bg1Image from '../img/mobile/m-background-1.png';
import bg2Image from '../img/mobile/m-background-2.png';
import bg3Image from '../img/mobile/m-background-3.png';
import bg4Image from '../img/mobile/m-background-4.png';
import bg5Image from '../img/mobile/m-background-5.png';
import whiteDownloadIconImg from '../img/bot/white-download-icon.png';

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
      return bg4Image;
    case 5:
      return bg5Image;
    default:
      return bg5Image;
  }
}

export default function Mobile() {
  const { agent, user, stage, voicesCount } = useContext(AppContext);
  const download_sberchat_url = getSberChatUrl(agent);

  return (
    <MobileContainer stage={stage}>
      <GlobalStyle />
      <UserSnowFlake user={user} screen="mobile" />
      <TextBlock>
        <Link to="/">
          <Logo src={logoSberImg} alt="logo" />
        </Link>
        <Greeting>
          <div>Друзья, с наступающим</div>
          <div>Новым годом!</div>
        </Greeting>
        <Text>
          Приближается самый волшебный и красивый праздник — Новый год! Давайте сделаем его ещё чудеснее и
          украсим нашу виртуальную ёлку персональными снежинками.
        </Text>
        <SmallText>
          Отправьте поздравление на{' '}
          <InTextAnchor href="mailto:sber@sberbank.ru">sber@sberbank.ru</InTextAnchor> или в СберЧате чат-боту{' '}
          <SemiBold>Sber2020</SemiBold>.
        </SmallText>
      </TextBlock>
      <TreeContainer>
        <Counter>
          <div className="number">{voicesCount}</div>
          <div className="text">счётчик снежинок</div>
        </Counter>
      </TreeContainer>
      <QRCodes>
        <img src={iosQRCodeImage} alt="qr-code-img" />
        <BigDownloadButton>
          <Link to="/happynewyear">
            <img src={whiteDownloadIconImg} alt="download-icon" />
            <span>Перейти к инструкции</span>
          </Link>
        </BigDownloadButton>
        <div>Скачайте или откройте СберЧат</div>
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
  background-color: #002200;
  background-image: url(${({ stage }) => getStageBg(stage)});
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 0 26px;
`;
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  z-index: 10;

  /* @media screen and (max-device-width: 374px) {
    border: 1px solid green;
  } */
  /* @media screen and (min-device-width: 375px) and (max-device-width: 399px) {
    border: 1px solid blue;
  } */
  /* iPhone 5 */
  /* @media screen and (max-device-width: 320px) and (max-device-height: 568px) {
    border: 1px solid green;
  } */
  /* Google Pixel 2 */
  /* @media screen and (device-width: 412px) and (max-device-height: 732px) {
    border: 1px solid red;
  } */
  /* iPhone 6S */
  /* @media screen and (device-width: 375px) and (device-height: 667px) {
    border: 1px solid red;
  } */
  /* iPhone */
  /* @media screen and (max-device-width: 420px) and (min-device-height: 720px) and (max-device-height: 740px) {
    border: 1px solid red;
  } */
  /* @media screen and (min-device-width: 421px) and (max-device-width: 640px) {
    border: 1px solid yellow;
  } */
`;
const Logo = styled.img`
  @media screen and (max-device-width: 374px) {
    width: 140px;
    margin: 14px 0;
  }
  @media screen and (min-device-width: 375px) {
    width: 170px;
    margin: 20px 0;
  }
`;
const Greeting = styled.div`
  margin-bottom: 14px;
  font-weight: 600;
  @media screen and (max-device-width: 320px) and (max-device-height: 568px) {
    font-size: 22px;
    line-height: 30px;
  }
  @media screen and (max-device-width: 374px) and (min-device-height: 569px) {
    font-size: 24px;
    line-height: 30px;
  }
  @media screen and (min-device-width: 375px) {
    font-size: 32px;
    line-height: 38px;
  }
  @media screen and (device-width: 375px) and (device-height: 667px) {
    font-size: 26px;
    line-height: 32px;
  }
  @media screen and (device-width: 412px) and (max-device-height: 732px) {
    font-size: 28px;
    line-height: 36px;
  }
  @media screen and (max-device-width: 420px) and (min-device-height: 720px) and (max-device-height: 740px) {
    font-size: 28px;
    line-height: 32px;
  }
`;
const Text = styled.div`
  @media screen and (max-device-width: 320px) and (max-device-height: 568px) {
    font-size: 15px;
    line-height: 26px;
  }
  @media screen and (max-device-width: 374px) and (min-device-height: 569px) {
    font-size: 18px;
    line-height: 28px;
  }
  @media screen and (min-device-width: 375px) {
    font-size: 22px;
    line-height: 32px;
  }
  @media screen and (device-width: 375px) and (device-height: 667px) {
    font-size: 18px;
    line-height: 30px;
  }
  @media screen and (device-width: 412px) and (max-device-height: 732px) {
    font-size: 20px;
    line-height: 32px;
  }
  @media screen and (max-device-width: 420px) and (min-device-height: 720px) and (max-device-height: 740px) {
    font-size: 20px;
    line-height: 32px;
  }
`;
const SmallText = styled.div`
  @media screen and (max-device-width: 320px) and (max-device-height: 568px) {
    font-size: 14px;
    line-height: 26px;
  }
  @media screen and (max-device-width: 374px) and (min-device-height: 569px) {
    font-size: 16px;
    line-height: 28px;
  }
  @media screen and (min-device-width: 375px) {
    font-size: 16px;
    line-height: 22px;
  }
  @media screen and (device-width: 375px) and (device-height: 667px) {
    font-size: 16px;
    line-height: 30px;
  }
  @media screen and (device-width: 412px) and (max-device-height: 732px) {
    font-size: 18px;
    line-height: 30px;
  }
  @media screen and (max-device-width: 420px) and (min-device-height: 720px) and (max-device-height: 740px) {
    font-size: 18px;
    line-height: 30px;
  }
`;
const TreeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media screen and (max-device-width: 374px) {
    height: 84vh;
  }
  @media screen and (min-device-width: 375px) {
    height: 72vh;
  }
  @media screen and (device-width: 375px) and (device-height: 667px) {
    height: 83vh;
  }
  @media screen and (max-device-width: 420px) and (min-device-height: 720px) and (max-device-height: 740px) {
    height: 86vh;
  }
  /* border: 1px solid red; */
`;
const Counter = styled.div`
  color: white;
  text-align: center;
  margin-bottom: 10px;
  .number {
    font-weight: 600;
    font-size: 26px;
  }
  .text {
    font-size: 16px;
  }
`;
const QRCodes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    color: white;
    margin-top: 10px;
  }
  img {
    width: 175px;
    margin: 0 0 10px 0;
  }
  @media screen and (max-device-width: 375px) {
    margin-bottom: 10px;
    div {
      font-size: 16px;
    }
  }
  @media screen and (min-device-width: 375px) {
    margin-bottom: 30px;
    div {
      font-size: 18px;
    }
  }
  /* border: 1px solid red; */
`;
const clear_blue_color = '#1284ff';
const BigDownloadButton = styled.div`
  display: flex;
  justify-content: center;
  a {
    width: 100%;
    height: 48px;
    width: 280px;
    border-radius: 4px;
    background-color: ${clear_blue_color};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
  span {
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.09;
    /* letter-spacing: -0.55px; */
    text-align: center;
  }
  img {
    width: 30px;
    margin-right: 5px;
  }
  @media screen and (max-device-width: 374px) {
    padding: 0 20px;
    a {
      width: 240px;
    }
    span {
      font-size: 14px;
      line-height: 18px;
      font-weight: 500;
    }
  }
  @media screen and (min-device-width: 375px) {
    padding: 0 80px;
    span {
      font-size: 16px;
    }
  }
`;
