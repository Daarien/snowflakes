import React, { useEffect, useRef, useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import AppContext from '../context';
import StarShineBg from './StarShineBg';
import FallingSnowFlakesBg from './FallingSfBg';
import UserSnowFlake from './UserSf';
import { Anchor, SemiBold } from './custom';

import logoSberImg from '../img/logo-sber.png';
import promMobileQRCodeImg from '../img/qr-codes/qr-prom-mobile.png';
import promBotQRCodeImg from '../img/qr-codes/qr-prom-bot.png';
import bg1Image from '../img/1920-1080-1-day.png';
import bg2Image from '../img/1920-1080-2-day.png';
import bg3Image from '../img/1920-1080-3-day.png';
import bg4Image from '../img/1920-1080-4-day.png';
import longBg1Img from '../img/2970-1080-1-day.png';
import longBg2Img from '../img/2970-1080-2-day.png';
import longBg3Img from '../img/2970-1080-3-day.png';
import longBg4Img from '../img/2970-1080-4-day.png';
import longBg5Img from '../img/2970-1080-5-day.png';

function getStageBg(stage, width) {
  if (width === 'normal') {
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
  if (width === 'long') {
    switch (stage) {
      case 0:
      case 1:
        return longBg1Img;
      case 2:
        return longBg2Img;
      case 3:
        return longBg3Img;
      case 4:
        return longBg4Img;
      case 5:
        return longBg5Img;
      default:
        return longBg5Img;
    }
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
    const h = window.innerHeight;
    console.log('height => ', h);
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
          <Logo src={logoSberImg} alt="logo" />
          <Greeting>
            <div>Друзья, с наступающим</div>
            <div>Новым годом!</div>
          </Greeting>
          <Text>
            <div>Приближается самый красивый зимний</div>
            <div>праздник &mdash; Новый год! Давайте добавим</div>
            <div>в него немного волшебства и украсим</div>
            <div>ёлку снежинками со своим именем.</div>
            <SendGreetText>
              <div>
                Отправьте поздравление на <Anchor href="mailto:sber@sberbank.ru">sber@sberbank.ru</Anchor>
              </div>
              <div>
                или в СберЧате на <SemiBold>Sber2020</SemiBold>.
              </div>
            </SendGreetText>
          </Text>
        </div>
        <QRCodes>
          <section>
            <img src={promBotQRCodeImg} alt="qr-code-img" />
            <div>Скачайте или откройте СберЧат</div>
          </section>
          <section>
            <img src={promMobileQRCodeImg} alt="qr-code-img" />
            <div>Мобильная версия сайта</div>
          </section>
        </QRCodes>
      </TextBlock>
      <Counter>
        <div className="number">{voicesCount}</div>
        <div className="text">счётчик снежинок</div>
      </Counter>
    </MainContainer>
  );
}

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }
  @media only screen and (max-height: 700px) {
    html {
      font-size: 10px;
    }
    body {
      min-width: 900px;
    }
  }
  @media only screen and (min-height: 701px) and (max-height: 800px) {
    html {
      font-size: 12px;
    }
    body {
      min-width: 1100px;
    }
  }
  @media only screen and (min-height: 801px) and (max-height: 900px) {
    html {
      font-size: 14px;
    }
    body {
      min-width: 1280px;
    }
  }
  @media only screen and (min-height: 901px) and (max-height: 950px) {
    html {
      font-size: 15px;
    }
    body {
      min-width: 1366px;
    }
  }
  @media only screen and (min-height: 951px) {
    html {
      font-size: 16px;
    }
    body {
      min-width: 1500px;
    }
  }
`;
const MainContainer = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right bottom;
  height: 100%;
  position: relative;
  display: flex;
  background-image: url(${({ stage }) => getStageBg(stage, 'normal')});
  @media only screen and (min-width: 1360px) and (max-height: 555px) {
    background-image: url(${({ stage }) => getStageBg(stage, 'long')});
  }
  @media only screen and (min-width: 1910px) and (max-height: 777px) {
    background-image: url(${({ stage }) => getStageBg(stage, 'long')});
  }
  @media only screen and (min-width: 2900px) and (max-height: 1090px) {
    background-image: url(${({ stage }) => getStageBg(stage, 'long')});
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 5rem;
  color: white;
  z-index: 10;
`;
const Logo = styled.img`
  width: 12rem;
  @media only screen and (max-height: 799px) {
    margin: 3rem 0 2rem 0;
  }
  @media only screen and (min-height: 800px) and (max-height: 999px) {
    margin: 4rem 0 3rem 0;
  }
  @media only screen and (min-height: 1000px) {
    margin: 5rem 0 4rem 0;
  }
`;
const Greeting = styled.div`
  font-size: 3.5rem;
  font-weight: 600;
  line-height: 4rem;
  margin-bottom: 3rem;
  /* @media only screen and (max-height: 700px) {
    border: 1px solid aquamarine;
  }
  @media only screen and (min-height: 701px) and (max-height: 800px) {
    border: 1px solid yellow;
  }
  @media only screen and (min-height: 801px) and (max-height: 950px) {
    border: 1px solid blue;
  }
  @media only screen and (min-height: 951px) {
    border: 1px solid red;
  } */
`;

const Text = styled.div`
  font-size: 2.1rem;
  line-height: 3.2rem;
`;
const SendGreetText = styled.div`
  font-size: 1.7rem;
  line-height: 2.4rem;
  margin-top: 1.5rem;
`;

const QRCodes = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 2rem 0 1rem 0;
  section {
    width: 16rem;
    margin-right: 3rem;
    font-size: 1.5rem;
    line-height: 2rem;
    img {
      width: 11rem;
    }
  }
`;
const Counter = styled.div`
  position: absolute;
  bottom: 1.5rem;
  color: white;
  text-align: center;
  .number {
    font-size: 2.8rem;
  }
  .text {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 1920px) and (max-height: 699px) {
    right: 20%;
  }
  @media only screen and (max-width: 1920px) and (min-height: 700px) {
    right: 18%;
  }
  @media only screen and (min-width: 1921px) and (max-height: 1100px) {
    right: 20%;
  }
  @media only screen and (min-width: 1921px) and (min-height: 1101px) {
    right: 18%;
  }
`;
