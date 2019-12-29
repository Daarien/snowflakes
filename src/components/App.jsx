import React, { useState, useRef, useEffect } from "react";
import SockJS from "sockjs-client";
import uuid from "uuid/v4";

const sock = new SockJS("http://localhost:5000");

function App() {
  const [isConnected, setConnected] = useState(false);
  const [count, setCount] = useState(0);
  const ws = useRef(sock);

  ws.current.onopen = message => {
    console.log("SockJS opened");
    console.log("TCL: sock.onopen -> message", message);
    setConnected(true);
  };
  ws.current.onmessage = message => {
    const data = JSON.parse(message.data);
    console.log("TCL: sock.onmessage -> data", data);
    const { count, incrementCount } = data;
    if (count) {
      setCount(count);
    }
    if (incrementCount) {
      setCount(prevCount => prevCount + 1);
    }
  };
  ws.current.onclose = () => {
    console.log("SockJS closed");
  };

  return (
    <div>
      <p>isConnected: {isConnected ? "true" : "false"}</p>
      <p>Counter: {count}</p>
    </div>
  );
}

export default App;
