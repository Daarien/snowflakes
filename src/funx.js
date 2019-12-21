export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getUserAgent() {
  const agent = window.navigator.userAgent;

  if (agent.includes('Android')) {
    return 'Android';
  }
  if (agent.includes('iPhone')) {
    return 'iOS';
  }
  if (agent.includes('iPad')) {
    return 'iPad';
  }

  return 'web';
}

export function getSberChatUrl(agent) {
  if (agent === 'iOS') {
    return 'https://sberchat.sberbank.ru/ios';
  }
  if (agent === 'Android') {
    return 'https://play.google.com/store/apps/details?id=ru.sberbank.sberchat';
  }
}
