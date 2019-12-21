import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import IosView from './IosView';
import AndroidView from './AndroidView';
import { BgImg } from './common';
import { getUserAgent } from '../../funx';

import headerImg from '../../img/bot/header.png';

export default function SberChatPage() {
  const agent = getUserAgent();

  return (
    <Container>
      <GlobalStyle />
      <Header>
        <HeaderText>
          <div>С наступающим Новым годом!</div>
          <p>
            Отправьте персональное поздравление в чат-бот <b>Sber2020</b>
          </p>
        </HeaderText>
        <HeaderImg src={headerImg} />
      </Header>
      {agent === 'iOS' || agent === 'iPad' ? <IosView /> : <AndroidView />}
    </Container>
  );
}

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
const Header = styled.header`
  /* border: 1px solid red; */
  position: relative;
`;
const HeaderImg = styled(BgImg)`
  @media screen and (max-device-width: 374px) {
    height: 183px;
  }
  @media screen and (min-device-width: 375px) {
    height: 191px;
  }
  @media screen and (max-device-width: 420px) and (min-device-height: 720px) and (max-device-height: 740px) {
    height: 210px;
  }
`;
const HeaderText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 32px 16px;
  color: white;
  div {
    font-size: 16px;
    font-weight: 600;
  }
  p {
    padding: 0;
    font-size: 14px;
    line-height: 1.3;
    width: 175px;
  }
`;
