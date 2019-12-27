import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import uuid from 'uuid/v4';

import { getRandomInt, getUserAgent } from '../funx';
import AppContext from '../context';

import DesktopPage from './Desktop';
import MobilePage from './Mobile';
import SberChatPage from './SberChatPage';

const client = new Client({ brockerUrl: '' });
client.webSocketFactory = () => new SockJS('/gs-guide-websocket');

const initNames = [
  // 'Матвийчук Сергей Анатольевич',
  // 'Декань Дмитрий Владимирович',
  // 'Михайлова Юлия Леонидовна',
  // 'Луговской Алексей Николаевич',
  // 'Васильев Виктор Владимирович',
  // 'Изотова Тамара Ивановна',
  // 'Константинопольская Констанция Константиновна',
  // 'Константинопольская Констанция Константиновна',
  // 'Константинопольская Констанция Константиновна',
];

export default function MainPage() {
  const [voicesCount, setVoicesCount] = useState(0);
  const [stage, setStage] = useState(0);
  const [user, setUser] = useState({ key: '', name: '' });
  const stack = useRef(initNames);
  const [isConnected, setConnected] = useState(false);

  const agent = getUserAgent();

  function addToStack(name) {
    if (stack.current.length > 50) {
      stack.current.shift();
      stack.current.push(name);
    } else {
      stack.current.push(name);
    }
    console.debug('TCL: stack length -> ', stack.current.length);
  }

  const wsClient = useRef(client);
  wsClient.current.onConnect = frame => {
    console.debug('Connected: ' + frame);
    setConnected(true);

    wsClient.current.subscribe('/topic/init', msg => {
      const message = JSON.parse(msg.body);
      console.debug('/topic/init msg => ', message);
      if (message) {
        const { voicesCountTotal, treeStage } = message;
        if (typeof voicesCountTotal === 'number') {
          setVoicesCount(voicesCountTotal);
        }
        if (typeof treeStage === 'number') {
          setStage(treeStage);
        }
      }
    });

    wsClient.current.onWebSocketClose = () => {
      setConnected(false);
    };
    wsClient.current.onWebSocketError = () => {
      setConnected(false);
    };
    wsClient.current.onDisconnect = () => {
      setConnected(false);
    };

    wsClient.current.subscribe('/topic/greetings_events', msg => {
      const message = JSON.parse(msg.body);
      console.debug('/topic/greetings_events => ', message);

      if (message) {
        const { userFullName, incrementCounter } = message;

        if (userFullName) {
          const key = uuid();
          setUser({ key, name: userFullName });
          addToStack(userFullName);
        }

        if (incrementCounter) {
          setVoicesCount(count => count + 1);
        }
      }
    });
  };

  wsClient.current.debug = str => {
    console.log(str);
  };

  useEffect(() => {
    wsClient.current.activate();
    const client = wsClient.current;
    return () => client.deactivate();
  }, []);

  const stackInterval = useRef(null);
  useEffect(() => {
    console.info('TCL: users -> stack.current length', stack.current.length);
    if (isConnected) {
      clearInterval(stackInterval.current);
      stackInterval.current = null;
    } else {
      const { length } = stack.current;
      if (length) {
        stackInterval.current = setInterval(() => {
          const key = uuid();
          const randomIndex = getRandomInt(0, length);
          setUser({ key, name: stack.current[randomIndex] });
          // setVoicesCount(count => count + 1);
          // if (stage < 5) {
          //   setTimeout(() => {
          //     setStage(stage => stage + 1);
          //   }, 10000);
          // }
        }, 5000);
      }
    }
  }, [isConnected]);

  return (
    <AppContext.Provider value={{ agent, user, stage, voicesCount }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {agent === 'web' ? <DesktopPage /> : <Redirect to="/mobile" />}
          </Route>
          <Route path="/mobile" component={MobilePage} />
          <Route path="/happynewyear" component={SberChatPage} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
