import React from 'react';
import { Flex } from '../custom';
import { getSberChatUrl } from '../../funx';

import {
  Main,
  Platform,
  PlatformLabel,
  ButtonsContainer,
  SmallDownloadButton,
  SmallOpenChatButton,
  SmallButtonLabel,
  PlatformAwLogo,
} from './common';

import androidIconPaleImg from '../../img/bot/pale-android-icon.png';
import androidIconImg from '../../img/bot/android-icon.png';
import downloadIconImg from '../../img/bot/download-icon.png';
import chatIconImg from '../../img/bot/chat-icon.png';
import airwatchLogo from '../../img/bot/airwatch-logo.png';

const android_aw_url = 'https://ds.emm/sberbank.ru';

export default function AnroidView() {
  const download_sberchat_url = getSberChatUrl('Android');

  return (
    <>
      <Main>
        <section>
          <Flex direction="column">
            <div>
              <Platform src={androidIconImg} />
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
              <SmallButtonLabel> </SmallButtonLabel>
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
          </ButtonsContainer>
        </section>
      </Main>
      {/* ---------------------------------------------------- main 2 ------------------------------------------ */}
      <Main>
        <section>
          <Flex direction="column">
            <PlatformAwLogo>
              <Platform src={androidIconPaleImg} className="pale" />
              <img src={airwatchLogo} className="aw" alt="aw-logo" />
            </PlatformAwLogo>
            <PlatformLabel>Корпоративные устройства с Airwatch</PlatformLabel>
          </Flex>
          <ButtonsContainer>
            <Flex direction="column">
              <SmallDownloadButton>
                <a href={android_aw_url}>
                  <img src={downloadIconImg} alt="download sberchat" />
                  <span>Скачать СберЧат</span>
                </a>
              </SmallDownloadButton>
              <SmallButtonLabel> </SmallButtonLabel>
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
          </ButtonsContainer>
        </section>
      </Main>
    </>
  );
}
