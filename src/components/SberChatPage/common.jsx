import styled from 'styled-components';

export const clear_blue_color = '#1284ff';

export const Main = styled.main`
  padding: 0 16px 16px 16px;
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
  /* @media screen and (max-device-width: 374px) {
    border: 1px solid green;
  } */
  /* @media screen and (min-device-width: 375px) and (max-device-width: 420px) {
    border: 1px solid blue;
  } */
  /* @media screen and (min-device-width: 421px) {
    border: 1px solid red;
  } */
  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) and (min-device-height: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
    /* border: 1px solid magenta; */
    .step-header {
      padding: 0 16px 0 40px;
    }
    .step-image {
      width: 30px;
      height: 30px;
    }
    .step-text {
      font-size: 20px;
    }
  }
`;

export const Platform = styled.img`
  object-fit: contain;
  width: 72px;
  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) and (min-device-height: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 110px;
  }
`;

export const PlatformLabel = styled.div`
  font-weight: 600;
  margin: 5px 0 15px 0;
  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) and (min-device-height: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
    font-size: 24px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
`;

export const SmallButton = styled.div`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.6px;
    img {
      width: 24px;
      margin-right: 5px;
    }
  }
  @media screen and (max-device-width: 374px) {
    a {
      padding: 0 8px;
    }
  }
  @media screen and (min-device-width: 375px) {
    a {
      padding: 0 12px;
    }
  }
  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) and (min-device-height: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
    a {
      padding: 8px 30px;
      font-size: 20px;
      img {
        width: 30px;
      }
    }
  }
`;

export const SmallDownloadButton = styled(SmallButton)`
  a {
    color: ${clear_blue_color};
    border: 1px solid ${clear_blue_color};
    background-color: white;
  }
`;

export const SmallOpenChatButton = styled(SmallButton)`
  a {
    color: white;
    border: 1px solid ${clear_blue_color};
    background-color: ${clear_blue_color};
  }
`;

export const SmallButtonLabel = styled.span`
  color: #444;
  margin: 5px 0;
  @media screen and (max-device-width: 320px) and (max-device-height: 568px) {
    font-size: 10px;
  }
  @media screen and (max-device-width: 374px) and (min-device-height: 569px) {
    font-size: 11px;
  }
  @media screen and (min-device-width: 375px) {
    font-size: 12px;
  }
  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) and (min-device-height: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
    font-size: 18px;
  }
`;

export const PlatformAwLogo = styled.div`
  position: relative;
  img.pale {
    width: 72px;
  }
  img.aw {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 31px;
  }
  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) and (min-device-height: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
    img.pale {
      width: 110px;
    }
    img.aw {
      width: 44px;
    }
  }
`;

export const BgImg = styled.div`
  background: url(${props => props.src}) center no-repeat;
  background-size: contain;
`;
