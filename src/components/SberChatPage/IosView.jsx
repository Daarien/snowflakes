import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Flex, InTextAnchor } from '../custom';
import { getSberChatUrl } from '../../funx';

import {
  Main,
  Platform,
  PlatformLabel,
  PlatformAwLogo,
  ButtonsContainer,
  SmallDownloadButton,
  SmallOpenChatButton,
  SmallButtonLabel,
  BgImg,
  clear_blue_color,
} from './common';

import iosIconImg from '../../img/bot/ios-icon.png';
import iosIconPaleImg from '../../img/bot/pale-ios-icon.png';
import downloadIconImg from '../../img/bot/download-icon.png';
import whiteDownloadIconImg from '../../img/bot/white-download-icon.png';
import chatIconImg from '../../img/bot/chat-icon.png';
import ShevronDown from '../../img/bot/indicator-down.png';
import ShevronUp from '../../img/bot/indicator-up.png';
import GreenArrowImg from '../../img/bot/arrow.png';
import airwatchLogo from '../../img/bot/airwatch-logo.png';

import numberOneImg from '../../img/bot/number-1.png';
import numberTwoImg from '../../img/bot/number-2.png';

import stepImg1 from '../../img/bot/s1.png';
import stepImg2 from '../../img/bot/s2.png';
import stepImg3 from '../../img/bot/s3.png';
import stepImg4 from '../../img/bot/s4.png';
import stepImg5 from '../../img/bot/s5.png';
import corpSteptepImg1 from '../../img/bot/corp/corp-step-1.png';
import corpSteptepImg2 from '../../img/bot/corp/corp-step-2.png';
import corpSteptepImg3 from '../../img/bot/corp/corp-step-3.png';
import corpSteptepImg4 from '../../img/bot/corp/corp-step-4.png';

export default function IosView() {
  const [privateDetails, openPrivateDetails] = useState(false);
  const [corpDetails, openCorpDetails] = useState(false);

  const download_sberchat_url = getSberChatUrl('iOS');

  return (
    <>
      {/* --------------- main 1 -------------- */}
      <Main>
        <section>
          <Flex direction="column">
            <div>
              <Platform src={iosIconImg} />
            </div>
            <PlatformLabel>Личные устройства</PlatformLabel>
          </Flex>
          <ButtonsContainer>
            <Flex direction="column">
              <SmallDownloadButton>
                <a href={download_sberchat_url}>
                  <img src={downloadIconImg} alt="download sberchat" />
                  <span>Скачать СберЧат</span>
                </a>
              </SmallDownloadButton>
              <SmallButtonLabel>iOS 11 и новее</SmallButtonLabel>
            </Flex>
            <Flex direction="column" style={{ alignSelf: 'flex-end' }}>
              <SmallOpenChatButton>
                <a href="sberchat://resolve?shortname=sber2020">
                  <img src={chatIconImg} alt="open chat-bot" />
                  <span>Открыть чат-бота</span>
                </a>
              </SmallOpenChatButton>
              <SmallButtonLabel>У меня установлен СберЧат</SmallButtonLabel>
            </Flex>
            <GreenArrow src={GreenArrowImg} />
          </ButtonsContainer>
        </section>
        <section>
          <TextHeader>Несколько шагов для первого запуска СберЧат на вашем iPhone, iPad</TextHeader>
        </section>
        <Toggler onClick={() => openPrivateDetails(state => !state)}>
          <span>Подробнее</span>
          <img src={privateDetails ? ShevronUp : ShevronDown} alt="shevron-down" />
        </Toggler>
        <Details open={privateDetails}>
          <section>
            <div className="step-header">
              <img src={numberOneImg} className="step-image" alt="step-1" />
              <div className="step-text">Приложение, установленное из App Store, больше не обновляется</div>
            </div>
          </section>
          <section>
            <ListItem>
              Для установки обновляемого приложения перейдите к инструкции.
              <div>
                <b>Важно!</b> Перед началом установки СберЧат удалите приложение из App Store.
              </div>
            </ListItem>
          </section>
          <section>
            <div className="step-header">
              <Link to="/">
                <img src={numberTwoImg} className="step-image" alt="step-2" />
              </Link>
              <div className="step-text">Инструкция</div>
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
          <BigDownloadButton>
            <a href={download_sberchat_url}>
              <img src={whiteDownloadIconImg} alt="download-icon" />
              <span>Скачать СберЧат</span>
            </a>
          </BigDownloadButton>
        </Details>
      </Main>
      {/* ---------------------------------------------------- main 2 ------------------------------------------ */}
      <Main>
        <section>
          <Flex direction="column">
            <PlatformAwLogo>
              <Platform src={iosIconPaleImg} className="pale" />
              <img src={airwatchLogo} className="aw" alt="aw-logo" />
            </PlatformAwLogo>
            <PlatformLabel>Корпоративные устройства с Airwatch</PlatformLabel>
          </Flex>
          <ButtonsContainer>
            <Flex direction="column">
              <SmallDownloadButton>
                <a href={download_sberchat_url}>
                  <img src={downloadIconImg} alt="download sberchat" />
                  <span>Скачать СберЧат</span>
                </a>
              </SmallDownloadButton>
              <SmallButtonLabel>iOS 11 и новее</SmallButtonLabel>
            </Flex>
            <Flex direction="column" style={{ alignSelf: 'flex-end' }}>
              <SmallOpenChatButton>
                <a href="sberchat://resolve?shortname=sber2020">
                  <img src={chatIconImg} alt="open chat-bot" />
                  <span>Открыть чат-бота</span>
                </a>
              </SmallOpenChatButton>
              <SmallButtonLabel>У меня установлен СберЧат</SmallButtonLabel>
            </Flex>
            <GreenArrow src={GreenArrowImg} />
          </ButtonsContainer>
        </section>
        <section>
          <TextHeader>Несколько шагов для первого запуска СберЧат на вашем iPhone, iPad</TextHeader>
        </section>
        <Toggler onClick={() => openCorpDetails(state => !state)}>
          <span>Подробнее</span>
          <img src={corpDetails ? ShevronUp : ShevronDown} alt="shevron-down" />
        </Toggler>
        <Details open={corpDetails}>
          <section>
            <div className="step-header">
              <img src={numberOneImg} className="step-image" alt="step-1" />
              <div className="step-text">Установите СберЧат из каталога SberUserSoft</div>
            </div>
          </section>
          <section>
            <ListItem>
              Перейдите по ссылке{' '}
              <InTextAnchor href="https://ds.emm/sberbank.ru">https://ds.emm/sberbank.ru</InTextAnchor> или
              откройте Catalog на Home screen устройства.
              <p>
                <b>Важно!</b> Для установки самого Airwatch обратитесь в службу поддержки.
              </p>
            </ListItem>
          </section>
          <section>
            <div className="step-header">
              <Link to="/">
                <img src={numberTwoImg} className="step-image" alt="step-2" />
              </Link>
              <div className="step-text">Инструкция</div>
            </div>
          </section>
          <section>
            <ListItem>При нажатии на Установить появится уведомление:</ListItem>
            <ListItemImg src={corpSteptepImg1} />
          </section>
          <section>
            <ListItem>Ваш запрос принят в обработку, потребуется некоторое время на установку:</ListItem>
            <ListItemImg src={corpSteptepImg2} />
          </section>
          <section>
            <ListItem>Далее перейдите на Home screen, где появится значок СберЧата:</ListItem>
            <ListItemImg src={corpSteptepImg3} />
          </section>
          <section>
            <ListItem>Для входа введите логин и пароль Sigma:</ListItem>
            <ListItemImg src={corpSteptepImg4}></ListItemImg>
          </section>
          <BigDownloadButton>
            <a href={download_sberchat_url}>
              <img src={whiteDownloadIconImg} alt="download-icon" />
              <span>Скачать СберЧат</span>
            </a>
          </BigDownloadButton>
        </Details>
      </Main>
    </>
  );
}

const GreenArrow = styled.img`
  position: absolute;
  height: 40px;
  left: -10px;
  bottom: -30px;
`;
const Toggler = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: #009f3e;
    font-size: 11px;
    margin-right: 6px;
  }
  img {
    width: 24px;
  }
`;
const Details = styled.div`
  max-height: ${({ open }) => (open ? '100%' : '0')};
  overflow: hidden;
  padding: ${({ open }) => (open ? '25px 0' : '0')};
  transition: all 400ms linear;
`;
const TextHeader = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;
const ListItem = styled.div`
  margin: 0 0 8px 32px;
  font-size: 15px;
  color: #444;
`;
const ListItemImg = styled(BgImg)`
  height: 130px;
`;
const BigDownloadButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
  padding: 0 32px;
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
