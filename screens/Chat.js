import React, { useState } from "react"; 
import { GiftedChat } from "react-native-gifted-chat";

export default function Chat() {
  const [messages, setMessages] = useState([]);

  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => handleSend(newMessage)}
      user={{
        _id: 1,
      }}
    />
  );
}
