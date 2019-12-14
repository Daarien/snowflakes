import React, { memo, useState, useRef, useEffect, cloneElement } from 'react';
import styled from 'styled-components';
import snowflake from '../img/white-big-star.png';

import { fallingUserSf } from '../animations';

const WINDOW_WIDTH = window.innerWidth;

function moveAside(size, screen) {
  const snow_zone = screen === 'desktop' ? WINDOW_WIDTH * 0.6 : WINDOW_WIDTH;
  const margin = Math.random() * snow_zone;
  const max_margin = snow_zone - size - 30;
  if (margin > max_margin) {
    return max_margin;
  }
  return margin;
}

export default memo(props => {
  const { user, screen } = props;
  const [users, setUsers] = useState([]);
  const [flakes, setFlakes] = useState([]);

  const FALL_TIME = screen === 'desktop' ? 15000 : 15000;
  const DELAY = screen === 'desktop' ? 6000 : 10000;
  const SF_WIDTH = screen === 'desktop' ? 320 : 230;

  useEffect(() => {
    if (user.key) {
      setUsers(prevUsers => [...prevUsers, user]);
    }
  }, [user]);

  function showSnowFlake(sf) {
    setFlakes(prevFlakes => {
      const f = prevFlakes.find(f => f.key === sf.key);
      if (f) {
        return prevFlakes;
      }

      return [...prevFlakes, { ...sf, shift: moveAside(SF_WIDTH, screen) }];
    });
    setTimeout(() => {
      setFlakes(flakes => {
        return flakes.filter(f => f.key !== sf.key);
      });
    }, FALL_TIME);
  }

  useEffect(() => {
    setInterval(() => {
      setUsers(users => {
        if (users.length) {
          const us = [...users];
          const u = us.shift();
          showSnowFlake(u);
          return us;
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
              <NameSF
                key={f.key}
                user={f.name}
                left={f.shift}
                duration={FALL_TIME}
                size={SF_WIDTH}
              />
            );
          })}
      </Wrapper>
    </SFContainer>
  );
});

const NameSF = memo(({ user, left, duration, size }) => {
  if (user) {
    const w = user.split(' ');
    return (
      <TheSnowFlake left={left} duration={duration} size={size}>
        <UserName>
          <div>{w[0]}</div>
          <div>{w[1]}</div>
          <div>{w[2]}</div>
        </UserName>
        <img src={snowflake} width={size} alt="user sf" />
      </TheSnowFlake>
    );
  }

  return null;
});

const SFContainer = styled.div`
  * {
    box-sizing: border-box;
  }
  position: absolute;
  top: 0;
  left: ${({ screen }) => (screen === 'desktop' ? '32%' : 0)};
  width: 100%;
  height: ${({ screen }) => (screen === 'desktop' ? '100%' : '73%')};
  overflow: hidden;
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const TheSnowFlake = styled.div`
  position: absolute;
  left: ${({ left }) => left}px;
  margin-top: -${({ size }) => size}px;
  z-index: 999;
  animation: ${fallingUserSf} ${({ duration }) => duration}ms linear;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserName = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  z-index: 555;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${({ screen }) => (screen === 'desktop' ? '20px' : '16px')};
  div {
    padding: 0 5px;
  }
`;
