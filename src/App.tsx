import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {MessagesSender} from "./Components/MessageSender/MessagesSender";
import cat from './Img/cat.png'
import cat2 from './Img/cat2.png'
import {Message} from "./Components/Message/Message";
import FrendMessage from "./Components/Message/FrendMessage";
import {SuperHeader} from "./Components/SuperHeader/SuperHeader";



export type MessageType= {
  id: string,
  user : UserType,
  message : MessageBodyType

}

 export type UserType = {
  avatar: string,
  name: string,
}

type MessageBodyType = {
  text: string,
  time: string
}

// структура сообщения
export const message0: MessageType = {
  id: v1(),
  user: {
    avatar: cat,
    name: 'NameFriend',

  },
  message: {
    text: 'text',
    time: '09:00',
  },
}

function App() {
  let [messages, setMessages] = useState<MessageType[]>([]);

  function addMessages(text: string, userName:string,avatar:string) {
    let message = { id: v1(), user: {avatar: avatar, name: userName}, message: {text: text, time: new Date().toTimeString().slice(0, 5)}};
    let newMessages = [...messages,message];
    setMessages(newMessages);

  }
  function deleteMessage() {
    let clonMessages = [...messages];
    clonMessages.pop();
    setMessages(clonMessages);
  }
  return (
    <div className="App">

      <div className="split left">
        <SuperHeader userName={'Tolya'} avatar={cat2} />
        <MessagesSender userName={'Lyusya'} avatar={cat}  messagesComponent={Message} frendMessagesComponent={FrendMessage}  addMessages={addMessages} deleteMessage={deleteMessage} messages={messages}/>
      </div>

      <div className="split right">
        <SuperHeader userName={'Lyusya'} avatar={cat} />
        <MessagesSender userName={'Tolya'}  avatar={cat2}  messagesComponent={Message} frendMessagesComponent={FrendMessage}  addMessages={addMessages} deleteMessage={deleteMessage} messages={messages}/>
      </div>

    </div>
  );
}

export default App;
