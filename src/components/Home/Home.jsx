import styles from "./Home.module.css";
import Chat from "../chats/Chat.jsx";
import Loader from "../Loader/Loader.jsx";
import {  GoogleGenerativeAI  } from "@google/generative-ai";
import React, { useState } from "react";
import Controls from "../controller/Controls.jsx";
const googleai = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const gemini = googleai.getGenerativeModel({ model: "gemini-1.5-flash" });
const chat = gemini.startChat({ history: [] });

function Home() {
   const [messages, setMessages] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  async function handleSendMessage(content) {
    addMessage({ content, role: "user" });
    setIsLoading(true);
    try {
      const result = await chat.sendMessage(content);
      addMessage({ content: result.response.text(), role: "assistant" });
    } catch (error) {
      addMessage({
        content: "Sorry, I couldn't process your request. Please try again!",
        role: "system",
      });
    }
    finally {
      setIsLoading(false);
    }
  }
  return (
    
    <div className={styles.App}>
        {/* {isLoading && <Loader />} */}
      <header className={styles.Header}>
        <img className={styles.Logo} src="/logo.png" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer} >
      <Chat message={messages}/>
      </div>
      <Controls onSend={handleSendMessage}end></Controls>
    </div>
  );
}



export default Home;