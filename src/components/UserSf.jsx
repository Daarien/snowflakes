import React, { memo, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import snowflake from '../img/user-star.png';

import { fallingUserSfDesktop, fallingUserSfMobile } from '../animations';

const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HEIGHT = window.innerHeight;

function getFallTime(screen) {
  const W = window.innerWidth;
  const H = window.innerHeight;
  const x = W / H;
  console.log('TCL: getFallTime -> x', x);
  if (screen === 'desktop') {
    if (x < 1.5) {
      return 16000;
    }
    if (x >= 1.5 && x <= 1.8) {
      return 13000;
    }
    if (x > 1.8 && x <= 2.5) {
      return 11000;
    }
    if (x > 2.5) {
      return 9000;
    }
  }
  if (screen === 'mobile') {
    return 12000;
  }

  return 13000;
}

function moveAside(screen) {
  const sfSize = screen === 'desktop' ? 400 : 250;
  const snow_zone = screen === 'desktop' ? WINDOW_WIDTH * 0.6 : WINDOW_WIDTH;
  const margin = Math.random() * snow_zone;
  const max_margin = snow_zone - sfSize - 20;
  if (margin > max_margin) {
    return max_margin;
  }
  return margin;
}

export default memo(({ user, screen }) => {
  const [users, setUsers] = useState([]);
  const [flakes, setFlakes] = useState([]);
  const FALL_TIME = useRef(13000);

  // const FALL_TIME = getFallTime(screen);
  const DELAY = screen === 'desktop' ? 5000 : 6000;

  useEffect(() => {
    FALL_TIME.current = getFallTime(screen);
  }, []);

  useEffect(() => {
    if (user.key) {
      setUsers(prevUsers => [...prevUsers, user]);
    }
  }, [user]);

  function showSnowFlake(sf) {
    setFlakes(prevFlakes => {
      const flakeStillFalling = prevFlakes.find(f => f.key === sf.key);
      if (flakeStillFalling) {
        return prevFlakes;
      }

      return [...prevFlakes, { ...sf, shift: moveAside(screen) }];
    });
    setTimeout(() => {
      setFlakes(flakes => {
        return flakes.filter(f => f.key !== sf.key);
      });
    }, FALL_TIME.current);
  }

  useEffect(() => {
    setInterval(() => {
      setUsers(users => {
        if (users.length) {
          const _users = [...users];
          console.info('TCL: _users buffer length', _users.length);
          const _user = _users.shift();
          showSnowFlake(_user);
          return _users;
        }
        return users;
      });
    }, DELAY);
  }, []);

  return (
    <SFContainer screen={screen}>
      <Wrapper>
        {Boolean(flakes.length) &&
          flakes.map(f => {
            return (
              <NameSF key={f.key} user={f.name} left={f.shift} duration={FALL_TIME.current} screen={screen} />
            );
          })}
      </Wrapper>
    </SFContainer>
  );
});

function isLongName(name) {
  for (const n of name) {
    if (n.length > 14) {
      return true;
    }
  }
  return false;
}

const NameSF = memo(({ user, left, duration, screen }) => {
  if (user) {
    const name = user.split(' ');
    const long = isLongName(name);

    return (
      <TheSnowFlake left={left} duration={duration} screen={screen}>
        <UserName screen={screen} long={long}>
          {name.map(n => (
            <div key={n}>{n}</div>
          ))}
        </UserName>
        <img src={snowflake} alt="user sf" />
      </TheSnowFlake>
    );
  }

  return null;
});

const SFContainer = styled.div`
  position: absolute;
  top: 0;
  left: ${({ screen }) => (screen === 'desktop' ? '33%' : 0)};
  right: 0;
  height: ${({ screen }) => (screen === 'desktop' ? '100%' : '75%')};
  overflow: hidden;
  box-sizing: border-box;
  /* border: 1px solid red; */
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const TheSnowFlake = styled.div`
  position: absolute;
  left: ${({ left }) => left}px;
  z-index: 999;
  animation: ${({ screen }) => (screen === 'desktop' ? fallingUserSfDesktop : fallingUserSfMobile)}
    ${({ duration }) => duration}ms linear;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    margin-top: -18rem;
    img {
      width: 18rem;
    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1500px) {
    margin-top: -20rem;
    img {
      width: 20rem;
    }
  }
  @media only screen and (min-width: 1501px) and (max-width: 1900px) {
    margin-top: -22rem;
    img {
      width: 22rem;
    }
  }
  @media only screen and (min-width: 1901px) {
    margin-top: -24rem;
    img {
      width: 24rem;
    }
  }
  /* -------  mobile section  -------- */
  @media screen and (max-device-width: 374px) {
    margin-top: -200px;
    img {
      width: 200px;
    }
  }
  @media screen and (min-device-width: 375px) and (max-device-width: 420px) {
    margin-top: -240px;
    img {
      width: 240px;
    }
  }
`;

const UserName = styled.div`
  position: absolute;
  z-index: 555;
  color: #00251d;
  text-shadow: 0 2px 4px white;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: ${({ screen, long }) => getFontSize(screen, long)};
  line-height: ${({ screen }) => (screen === 'desktop' ? '2.2rem' : '22px')};
  font-weight: 500;
  div {
    padding: 0 5px;
  }
`;

function getFontSize(screen, long) {
  if (screen === 'desktop') {
    return long ? '1.4rem' : '1.6rem';
  }

  return long ? '14px' : '16px';
}
