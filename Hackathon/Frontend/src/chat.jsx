import {useEffect, useState } from 'react';
import './chat.css';
function Chat({ans}) {
    var [chat,setchat] =useState([]);
    useEffect(() => {
    if (ans) {
      setchat(prev => [...prev, <div className="question">{ans}</div>]);
    }
  }, [ans]);
    
  return (
    <div className="chat-container">
        <div className="top"></div>
      {chat}
        <div className="bot"></div>
        </div>
  );
}
export default Chat;