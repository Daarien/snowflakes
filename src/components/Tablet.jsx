import React, { useContext, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

import AppContext from '../context';
import UserSnowFlake from './UserSf';
import { Anchor, SemiBold } from './custom';
import { clear_blue_color } from './SberChatPage/common';

import logoSberImg from '../img/logo-sber.png';
import iosQRCodeImage from '../img/qr-codes/qr-prom-bot.png';
import bgVerticalImg from '../img/ipad/ipad-1024-1366.png';
import bgHorizontalImg from '../img/ipad/ipad-1366-1024.png';
import whiteDownloadIconImg from '../img/bot/white-download-icon.png';

export default function Mobile() {
  const { user, stage, voicesCount } = useContext(AppContext);

  const WINDOW_WIDTH = window.innerWidth;
  const WINDOW_HEIGHT = window.innerHeight;
  const layout = WINDOW_WIDTH < WINDOW_HEIGHT ? 'portrait' : 'landscape';
  console.log('TCL: Mobile -> layout', layout);

  return (
    <TabletContainer stage={stage}>
      <GlobalStyle />
      <Wrapper>
        <UserSnowFlake user={user} screen={layout === 'portrait' ? 'mobile' : 'desktop'} />
        <TextBlock>
          <Link to="/">
            <Logo src={logoSberImg} alt="logo" />
          </Link>
          <Greeting>
            {layout === 'portrait' ? (
              <div>Друзья, с наступающим Новым годом!</div>
            ) : (
              <Fragment>
                <div>Друзья, с наступающим</div>
                <div>Новым годом!</div>
              </Fragment>
            )}
          </Greeting>
          <Text>
            Приближается самый красивый зимний праздник — Новый год! Давайте добавим в него немного волшебства
            и украсим ёлку снежинками со своим именем.
          </Text>
          <SmallText>
            Отправьте поздравление на <Anchor href="mailto:sber@sberbank.ru">sber@sberbank.ru</Anchor> или в
            СберЧате на <SemiBold>Sber2020</SemiBold>.
          </SmallText>
        </TextBlock>
        <Footer>
          <Counter>
            <div className="number">{voicesCount}</div>
            <div className="text">счётчик снежинок</div>
          </Counter>
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
        </Footer>
      </Wrapper>
    </TabletContainer>
  );
}

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }
  html {
    font-size: 16px;
  }
`;

const TabletContainer = styled.div`
  height: 100%;
  display: flex;
  background-color: #112211;
  background-size: 100% auto;
  background-repeat: no-repeat;
  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) and (min-device-height: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    background-image: url(${bgVerticalImg});
  }
  @media screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (min-device-height: 768px) and (max-device-height: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    background-image: url(${bgHorizontalImg});
  }
`;
const Wrapper = styled.div`
  /* border: 1px solid yellow; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-device-width: 768px) and (max-device-height: 1024px) and (orientation: portrait) {
    margin: 30px 60px;
  }
  @media screen and (min-device-width: 769px) and (max-device-width: 1024px) and (min-device-height: 1025px) and (max-device-height: 1366px) and (orientation: portrait) {
    margin: 32px 72px;
  }
  @media screen and (max-device-width: 1024px) and (max-device-height: 768px) and (orientation: landscape) {
    margin: 32px 0 10px 32px;
    width: 36%;
  }
  @media screen and (min-device-width: 1025px) and (max-device-width: 1366px) and (min-device-height: 769px) and (max-device-height: 1024px) and (orientation: landscape) {
    margin: 72px 0 18px 72px;
    width: 36%;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  z-index: 10;
  /* iPad, iPad Pro */
  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) and (min-device-height: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
    /* border: 1px solid yellow; */
  }
`;
const Logo = styled.img`
  width: 140px;
  @media screen and (max-device-width: 768px) and (max-device-height: 1024px) and (orientation: portrait) {
    margin-bottom: 12px;
  }
  @media screen and (min-device-width: 769px) and (max-device-width: 1024px) and (min-device-height: 1025px) and (max-device-height: 1366px) and (orientation: portrait) {
    margin-bottom: 30px;
  }
  @media screen and (max-device-width: 1024px) and (max-device-height: 768px) and (orientation: landscape) {
    margin-bottom: 30px;
  }
  @media screen and (min-device-width: 1025px) and (max-device-width: 1366px) and (min-device-height: 769px) and (max-device-height: 1024px) and (orientation: landscape) {
    margin-bottom: 30px;
  }
`;
const Greeting = styled.div`
  font-weight: 600;
  @media screen and (max-device-width: 768px) and (max-device-height: 1024px) and (orientation: portrait) {
    margin-bottom: 16px;
    font-size: 22px;
  }
  @media screen and (min-device-width: 769px) and (max-device-width: 1024px) and (min-device-height: 1025px) and (max-device-height: 1366px) and (orientation: portrait) {
    margin-bottom: 24px;
    font-size: 30px;
  }
  @media screen and (max-device-width: 1024px) and (max-device-height: 768px) and (orientation: landscape) {
    margin-bottom: 24px;
    font-size: 22px;
  }
  @media screen and (min-device-width: 1025px) and (max-device-width: 1366px) and (min-device-height: 769px) and (max-device-height: 1024px) and (orientation: landscape) {
    margin-bottom: 24px;
    font-size: 28px;
  }
`;
const Text = styled.div`
  @media screen and (max-device-width: 768px) and (max-device-height: 1024px) and (orientation: portrait) {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 8px;
  }
  @media screen and (min-device-width: 769px) and (max-device-width: 1024px) and (min-device-height: 1025px) and (max-device-height: 1366px) and (orientation: portrait) {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 16px;
  }
  @media screen and (max-device-width: 1024px) and (max-device-height: 768px) and (orientation: landscape) {
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 16px;
  }
  @media screen and (min-device-width: 1025px) and (max-device-width: 1366px) and (min-device-height: 769px) and (max-device-height: 1024px) and (orientation: landscape) {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 16px;
  }
`;

const SmallText = styled.div`
  @media screen and (max-device-width: 768px) and (max-device-height: 1024px) and (orientation: portrait) {
    font-size: 16px;
    line-height: 26px;
  }
  @media screen and (min-device-width: 769px) and (max-device-width: 1024px) and (min-device-height: 1025px) and (max-device-height: 1366px) and (orientation: portrait) {
    font-size: 22px;
    line-height: 30px;
  }
  @media screen and (max-device-width: 1024px) and (max-device-height: 768px) and (orientation: landscape) {
    font-size: 16px;
    line-height: 26px;
  }
  @media screen and (min-device-width: 1025px) and (max-device-width: 1366px) and (min-device-height: 769px) and (max-device-height: 1024px) and (orientation: landscape) {
    font-size: 21px;
    line-height: 30px;
  }
`;

const Footer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) and (min-device-height: 1024px) and (max-device-height: 1366px) {
  }
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
    font-size: 20px;
  }
  @media screen and (max-device-width: 768px) and (max-device-height: 1024px) and (orientation: portrait) {
    margin-bottom: 6px;
    .number {
      font-size: 20px;
    }
    .text {
      font-size: 16px;
    }
  }
  @media screen and (min-device-width: 769px) and (max-device-width: 1024px) and (min-device-height: 1025px) and (max-device-height: 1366px) and (orientation: portrait) {
  }
  @media screen and (max-device-width: 1024px) and (max-device-height: 768px) and (orientation: landscape) {
    position: absolute;
    right: 22%;
    bottom: 14px;
    margin-bottom: 6px;
    .number {
      font-size: 20px;
    }
    .text {
      font-size: 16px;
    }
  }
  @media screen and (min-device-width: 1025px) and (max-device-width: 1366px) and (min-device-height: 769px) and (max-device-height: 1024px) and (orientation: landscape) {
    position: absolute;
    right: 22%;
    bottom: 14px;
  }
`;

const QRCodes = styled.div`
  /* border: 1px solid maroon; */
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    font-size: 18px;
    color: white;
    margin-top: 10px;
  }
  img {
    width: 125px;
    margin-bottom: 10px;
  }
  @media screen and (max-device-width: 768px) and (max-device-height: 1024px) and (orientation: portrait) {
    div {
      font-size: 14px;
      margin-top: 8px;
    }
    img {
      width: 100px;
      margin-bottom: 2px;
    }
  }
  @media screen and (min-device-width: 769px) and (max-device-width: 1024px) and (min-device-height: 1025px) and (max-device-height: 1366px) and (orientation: portrait) {
    div {
      font-size: 18px;
    }
    img {
      width: 140px;
    }
  }
  @media screen and (max-device-width: 1024px) and (max-device-height: 768px) and (orientation: landscape) {
    align-self: flex-start;
    div {
      font-size: 14px;
    }
    img {
      width: 110px;
      margin-bottom: 5px;
    }
  }
  @media screen and (min-device-width: 1025px) and (max-device-width: 1366px) and (min-device-height: 769px) and (max-device-height: 1024px) and (orientation: landscape) {
    align-self: flex-start;
    div {
      font-size: 18px;
    }
    img {
      width: 140px;
    }
  }
`;
const BigDownloadButton = styled.div`
  display: flex;
  justify-content: center;
  a {
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
    text-align: center;
  }
  img {
    width: 30px;
    margin: 5px;
  }
  @media screen and (max-device-width: 768px) and (max-device-height: 1024px) and (orientation: portrait) {
    a {
      padding: 0 20px;
      span {
        font-size: 16px;
      }
    }
  }
  @media screen and (min-device-width: 769px) and (max-device-width: 1024px) and (min-device-height: 1025px) and (max-device-height: 1366px) and (orientation: portrait) {
    a {
      padding: 5px 25px;
      span {
        font-size: 20px;
      }
    }
  }
  @media screen and (max-device-width: 1024px) and (max-device-height: 768px) and (orientation: landscape) {
    a {
      padding: 1px 15px;
      span {
        font-size: 14px;
      }
      img {
        width: 20px;
      }
    }
  }
  @media screen and (min-device-width: 1025px) and (max-device-width: 1366px) and (min-device-height: 769px) and (max-device-height: 1024px) and (orientation: landscape) {
    a {
      padding: 3px 22px;
      span {
        font-size: 18px;
      }
      img {
        width: 25px;
      }
    }
  }
`;
