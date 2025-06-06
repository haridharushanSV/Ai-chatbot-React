import React from 'react';
import styles from './Chat.module.css';
import Markdown from 'react-markdown';
const WELCOME={
  role: 'system',
  content: 'Welcome to the AI Chatbot! You can ask me anything.',
}

export default function Chat({ message }) {
  return (
    <div className={styles.Chat}>
    {[WELCOME, ...message].map(({ role, content }, index) => (
      <div key={index} className={styles.Message} data-role={role}>
        <Markdown>{content}</Markdown>
      </div>
    ))}
  </div>
  );
}
