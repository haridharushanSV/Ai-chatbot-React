import styles from "./App.module.css";
import Chat from "./components/chats/Chat.jsx";
import React, { useState } from "react";
import Controls from "./components/controller/Controls.jsx";
function App() {
   const [messages, setMessages] = useState(MESSAGES);
  return (
    
    <div className={styles.App}>
        
      <header className={styles.Header}>
        <img className={styles.Logo} src="/logo.png" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer} >
      <Chat message={messages}/>
      </div>
      <Controls></Controls>
    </div>
  );
}

const MESSAGES = [{
  role: "user",
  content: "Hello, how are you?",
},
{
  role: "assistant",
  content: "I'm fine, thank you! How can I help you today?",
},
{
  role: "user",
  content: "Can you tell me a joke?",
},
{
  role: "assistant",
  content: "Sure! Why did the scarecrow win an award? Because he was outstanding in his field!",
}
];

export default App;