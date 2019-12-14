import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import { Flex } from './custom';

import headerImg from '../img/bot/header.png';
import iosIconImg from '../img/bot/ios-icon.png';
import androidIconImg from '../img/bot/android-icon.png';
import downloadIconImg from '../img/bot/download-icon.png';
import whiteDownloadIconImg from '../img/bot/white-download-icon.png';
import chatIconImg from '../img/bot/chat-icon.png';
import numberOneImg from '../img/bot/number-1.png';
import numberTwoImg from '../img/bot/number-2.png';
import stepImg1 from '../img/bot/s1.png';
import stepImg2 from '../img/bot/s2.png';
import stepImg3 from '../img/bot/s3.png';
import stepImg4 from '../img/bot/s4.png';
import stepImg5 from '../img/bot/s5.png';

const download_sberchat_url =
  'itms-services://?action=download-manifest&url=https://sberchat.sberbank.ru/dist/sberchat.plist';

export default function BotPage() {
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <Link to="/">
          <HeaderImg src={headerImg} />
        </Link>
        <Flex justify="space-around">
          <Flex direction="column" justify="space-between">
            <Platform src={iosIconImg} height={72} />
            <SmallDownloadButton>
              <img src={downloadIconImg} />
              <span>Скачать СберЧат</span>
            </SmallDownloadButton>
            <SmallButtonLabel>iOS 11 и новее</SmallButtonLabel>
          </Flex>
          <Flex direction="column" justify="space-between">
            <Platform src={androidIconImg} height={72} />
            <SmallOpenChatButton>
              <img src={chatIconImg} />
              <span>Открыть чат-бота</span>
            </SmallOpenChatButton>
            <SmallButtonLabel>У меня установлен СберЧат</SmallButtonLabel>
          </Flex>
        </Flex>
      </Header>
      <Main>
        <section>
          <div className="step-header">
            <img src={numberOneImg} className="step-image" />
            <div className="step-text">
              Удалите ранее установленное приложение из AppStore и скачайте новое
            </div>
          </div>
        </section>
        <section>
          <div className="step-header">
            <img src={numberTwoImg} className="step-image" />
            <div className="step-text">
              Несколько шагов для первого запуска СберЧат на вашем iPhone
            </div>
          </div>
        </section>
        <section>
          <ListItem>При первом запуске может появиться уведомление:</ListItem>
          <ListItemImg src={stepImg1} />
        </section>
        <section>
          <ListItem>Перейдите в «Настройки» и выберите раздел «Основные»:</ListItem>
          <ListItemImg src={stepImg2} />
        </section>
        <section>
          <ListItem>
            Далее перейдите в «Профили и управление устройством» и нажмите на «Sberbank» в разделе
            «Корпоративная программа»:
          </ListItem>
          <ListItemImg src={stepImg3} />
        </section>
        <section>
          <ListItem>Нажмите «Доверять «Sberbank»:</ListItem>
          <ListItemImg src={stepImg4} />
        </section>
        <section>
          <ListItem>Для входа введите логин и пароль Sigma:</ListItem>
          <ListItemImg src={stepImg5}></ListItemImg>
        </section>
      </Main>
      <Footer>
        <BigDownloadButton>
          <a href={download_sberchat_url}>
            <img src={whiteDownloadIconImg} />
            <span>Скачать СберЧат</span>
          </a>
        </BigDownloadButton>
      </Footer>
    </Container>
  );
}

const clear_blue_color = '#1284ff';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
const Container = styled.div`
  width: 100%;
`;
const BgImg = styled.div`
  background: url(${props => props.src}) center no-repeat;
  background-size: contain;
`;
const Header = styled.header`
  border: 1px solid red;
  margin-bottom: 20px;
`;
const HeaderImg = styled(BgImg)`
  height: 230px;
  margin-bottom: 20px;
`;
const Platform = styled.img`
  margin-bottom: 22px;
  object-fit: contain;
`;
const SmallButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 165px;
  height: 38px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  img {
    width: 24px;
    margin-right: 5px;
  }
`;
const SmallDownloadButton = styled(SmallButton)`
  color: ${clear_blue_color};
  border: 1px solid ${clear_blue_color};
  background-color: white;
`;
const SmallOpenChatButton = styled(SmallButton)`
  color: white;
  border: 1px solid ${clear_blue_color};
  background-color: ${clear_blue_color};
`;
const SmallButtonLabel = styled.span`
  color: #444;
  font-size: 12px;
  margin: 5px 0;
`;
const Main = styled.main`
  padding: 0 16px;
  border: 1px solid blue;
  section {
    margin: 0 0 16px 0;
  }
  .step-header {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 16px 0 32px;
  }
  .step-image {
    object-fit: contain;
    position: absolute;
    width: 24px;
    height: 24px;
    left: 0;
    top: 0;
  }
  .step-text {
    margin: 0;
    font-size: 15px;
    font-weight: 600;
  }
`;
const ListItem = styled.div`
  margin: 0 0 8px 32px;
  font-size: 15px;
  color: #444;
`;
const ListItemImg = styled(BgImg)`
  height: 130px;
`;
const Footer = styled.footer`
  padding-bottom: 40px;
`;
const BigDownloadButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  padding: 0 80px;
  a {
    display: block;
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
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.09;
    letter-spacing: -0.55px;
    text-align: center;
  }
  img {
    width: 24px;
    margin-right: 5px;
  }
`;
