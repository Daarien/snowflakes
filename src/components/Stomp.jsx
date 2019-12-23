import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import uuid from "uuid/v4";

import AppContext from "../context";

import MainPage from "./Main";
import MobilePage from "./Mobile";
import BotPage from "./Bot";

function initClient() {
  const client = new Client({ brockerUrl: "" });
  client.webSocketFactory = () =>
    new SockJS("/snowflakeserver/gs-guide-websocket");
  return client;
}

function App() {
  const [voicesCount, setVoicesCount] = useState(0);
  const [stage, setStag] = useState(0);
  const [user, setUser] = useState({ key: "", name: "" });
  const stack = useRef([]);
  const [isConnected, setConnected] = useState(false);

  function addToStack(name) {
    const l = stack.current.length;
    if (l > 50) {
      stack.current.shift();
      stack.current.push(name);
    } else {
      stack.current.push(name);
    }
  }

  const wsClient = useRef(initClient());
  wsClient.current.onConnect = frame => {
    console.log("Connected: " + frame);
    setConnected(true);

    wsClient.current.subscribe("/topic/init", msg => {
      const message = JSON.parse(msg.body);
      console.log("/topic/init msg => ", message);
      if (message) {
        const { voicesCountTotal, treeStage } = message;
        if (voicesCountTotal && treeStage) {
          setVoicesCount(voicesCountTotal);
          setStage(treeStage);
        }
      }
    });

    wsClient.current.subscribe("/topic/greetings_events", msg => {
      const message = JSON.parse(msg.body);
      console.log("/topic/greetings_events => ", message);
      if (message) {
        const { userFullName, incrementCounter } = message;

        if (userFullName) {
          const key = uuid();
          setUser({ key, name: userFullName });
          addToStack(userFullName);
        }

        if (incrementCounter) {
          setVoicesCount(count => count++);
        }
      }
    });
  };

  wsClient.current.debug = str => {
    console.log(str);
  };

  useEffect(() => {
    // wsClient.current.activate();
    // const client = wsClient.current;
    // return () => client.deactivate();
    setInterval(() => {
      const key = uuid();
      const name = "Иванов Иван Иванович";
      setUser({ key, name });
    }, 4000);
    // setInterval(() => {
    //   const key = uuid();
    //   const name = 'Сидоров Никанор Петрович';
    //   setUser({ key, name });
    //   setVoicesCount(count => count + 1);
    // }, 4000);
    // const stageInterval = setInterval(() => {
    //   setStage(stage => stage + 1);
    // }, 5000);
  }, []);

  return (
    <AppContext.Provider value={{ user, stage, voicesCount }}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/mobile" component={MobilePage} />
          <Route path="/bot" component={BotPage} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
